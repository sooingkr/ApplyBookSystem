import React, { useState, useEffect, useCallback } from "react";
import {
  Table,
  Menu,
  Dropdown,
  Pagination,
  Dimmer,
  Loader
} from "semantic-ui-react";
import {
  REQ_TYPE_PRIVATE,
  REQ_TYPE_PRIVATE_NM,
  REQ_TYPE_COMMON,
  REQ_TYPE_COMMON_NM
} from "../../../common/constants/commonConstant";

const columns = [
  "",
  "신청년월",
  "신청 구분",
  "도서명",
  "신청일",
  "요청자",
  "상태"
];

const timestampToDate = dateTime => {
  return new Date(dateTime).toLocaleDateString();
};

const statusToKorean = status => {
  let koreanStatus = "";
  if (status === "REQUEST") {
    koreanStatus = "구매신청";
  } else if (status === "CANCLE") {
    koreanStatus = "신청취소";
  } else if (status === "REJECT") {
    koreanStatus = "구매반려";
  } else if (status === "APPROVAL") {
    koreanStatus = "구매승인";
  } else if (status === "RECEIPT") {
    koreanStatus = "도서수령";
  }

  return koreanStatus;
};

const reqTypeToKorean = reqType => {
  let koreanStatus = "";
  if (reqType === REQ_TYPE_PRIVATE) {
    koreanStatus = REQ_TYPE_PRIVATE_NM;
  } else if (reqType === REQ_TYPE_COMMON) {
    koreanStatus = REQ_TYPE_COMMON_NM;
  }

  return koreanStatus;
};

const options = [
  {
    key: "10",
    text: "10",
    value: "10"
  },
  {
    key: "20",
    text: "20",
    value: "20"
  },
  {
    key: "40",
    text: "40",
    value: "40"
  },
  {
    key: "100",
    text: "100",
    value: "100"
  }
];

const BookListTable = ({ onTableRowDoubleClick, books, Loading }) => {
  const [active, setActive] = useState(1);
  const [firstIndex, setFirstIndex] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [pageLastCount, setPageLastCount] = useState(1);
  const [count, setCount] = useState(10);

  const onPaginationChange = useCallback(
    (e, { activePage }) => {
      setActive({ activePage }.activePage);
      setFirstIndex(Number(activePage) * count - count);
    },
    [count]
  );

  const onCountChange = useCallback((e, { value }) => {
    setCount(Number({ value }.value));
    setActive(1);
    setFirstIndex(0);
  }, []);

  useEffect(() => {
    if (books) {
      setTotalPage(Number(Math.ceil(books.length / count)));

      if (Number(totalPage) === Number(active)) {
        setPageLastCount(books.length);
      } else {
        setPageLastCount(firstIndex + count);
      }
    }
  }, [books, totalPage, active, pageLastCount, firstIndex, count]);

  useEffect(() => {
    setActive(1);
    setFirstIndex(0);
  }, [books]);

  return (
    <>
      <Menu compact>
        <Dropdown
          compact
          selection
          defaultValue={options[0].value}
          onChange={onCountChange}
          options={options}
        />
      </Menu>
      {Loading && (
        <Dimmer active inverted>
          <Loader>Loading...</Loader>
        </Dimmer>
      )}

      <Table celled striped selectable>
        <Table.Header>
          <Table.Row textAlign={"center"}>
            <Table.HeaderCell colSpan="6">
              <Pagination
                pointing
                secondary
                activePage={active}
                totalPages={totalPage}
                onPageChange={onPaginationChange}
              />
            </Table.HeaderCell>
            <Table.HeaderCell colSpan="1">
              {books != null && books.length > 0 ? (
                <>
                  {firstIndex + 1}-{pageLastCount} / {books.length}
                </>
              ) : (
                `0 / 0`
              )}
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            {columns.map(column => (
              <Table.HeaderCell key={column} textAlign="center">
                {column}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {books && books.length > 0 ? (
            books.map((book, index) =>
              index < firstIndex + count && index >= firstIndex ? (
                <Table.Row
                  key={book.ordNum}
                  onDoubleClick={e => onTableRowDoubleClick(book.ordNum)}
                >
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>
                    {convertDateFormatForMonth(book.reqYearMonth)}
                  </Table.Cell>
                  <Table.Cell>{reqTypeToKorean(book.reqType)}</Table.Cell>
                  <Table.Cell>{book.bookName}</Table.Cell>
                  <Table.Cell>{timestampToDate(book.regDt)}</Table.Cell>
                  <Table.Cell>{book.mbrName}</Table.Cell>
                  <Table.Cell>{statusToKorean(book.status)}</Table.Cell>
                </Table.Row>
              ) : null
            )
          ) : (
            <Table.Row>
              <Table.Cell textAlign="center" colSpan="7">
                검색결과가 없습니다.
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>

        <Table.Footer fullWidth></Table.Footer>
      </Table>
    </>
  );
};

export default BookListTable;

function convertDateFormatForMonth(dateStr) {
  let formatedDateStr = `${dateStr.substring(0, 4)}.${dateStr.substring(4, 6)}`;
  return formatedDateStr;
}
