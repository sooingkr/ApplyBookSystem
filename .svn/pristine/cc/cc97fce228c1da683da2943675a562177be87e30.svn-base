import React, { useState, useEffect, useCallback } from "react";
import {
  Button,
  Modal,
  Header,
  Icon,
  Radio,
  Segment,
  Divider,
  Item,
  Pagination,
  Dropdown,
  Dimmer,
  Loader
} from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { requestYes24BookInfoAction } from "../actionCreators";
import {
  YES24_GOODS_IMG_URL,
  SPECIAL_CHAR_REG_EX,
  SPECIAL_CHAR_BOOK_NAME_REG_EX,
  CHAR_REG_EX
} from "../../../common/constants/commonConstant";

const options = [
  {
    key: "5",
    text: "5",
    value: "5"
  },
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

const ModalPopup = ({
  onClose,
  onSubmit,
  yes24SearchBookList,
  onClickShowDetailBookInfo,
  searchBookName
}) => {
  const dispatch = useDispatch();
  const { isYes24Requesting } = useSelector(state => state.requestBookReducer);
  const [selectedBookNum, setSelectedBookNum] = useState(0);
  const [active, setActive] = useState(1);
  const [firstIndex, setFirstIndex] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [pageLastCount, setPageLastCount] = useState(1);
  const [count, setCount] = useState(5);

  const onChkBoxChange = useCallback(
    (e, { value }) => {
      setSelectedBookNum(value);
    },
    [setSelectedBookNum]
  );

  const onPaginationChange = useCallback((e, { activePage }) => {
    setActive(activePage);
    setFirstIndex(Number(activePage) * count - count);

    dispatch(
      requestYes24BookInfoAction({
        bookName: escape(searchBookName),
        active: Number(activePage - 1),
        count: Number(count)
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onCountChange = useCallback((e, { value }) => {
    setCount(Number(value));
    setActive(1);
    setFirstIndex(0);

    dispatch(
      requestYes24BookInfoAction({
        bookName: escape(searchBookName),
        active: Number(active - 1),
        count: Number(value)
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let totalCount = 0;

    if (yes24SearchBookList) {
      totalCount = Number(yes24SearchBookList.TotalCount);
      setTotalPage(Number(Math.ceil(totalCount / count)));
    }

    if (Number(totalPage) === Number(active)) {
      setPageLastCount(totalCount);
    } else {
      setPageLastCount(firstIndex + count);
    }
  }, [
    yes24SearchBookList,
    totalPage,
    active,
    pageLastCount,
    firstIndex,
    count
  ]);

  return (
    <Modal closeIcon open={true} onClose={onClose}>
      <Header icon="book" content="YES24 검색 목록" />
      <Modal.Content>
        <Segment.Group>
          <Segment>
            {isYes24Requesting ? (
              <Dimmer inverted active>
                <Loader content="Loading" />
              </Dimmer>
            ) : null}
            <Dropdown
              compact
              selection
              defaultValue={options[0].value}
              onChange={onCountChange}
              options={options}
            />
            {yes24SearchBookList != null &&
            yes24SearchBookList.List.length > 0 ? (
              yes24SearchBookList.List.map((bookInfo, i) => {
                return (
                  <Item.Group divided key={i + bookInfo.GOODS_NO}>
                    <Item>
                      <Item.Image
                        src={`${YES24_GOODS_IMG_URL}${bookInfo.GOODS_NO}`}
                        size="small"
                      />
                      <Item.Content>
                        <Item.Header>
                          <Radio
                            radio
                            label=""
                            name="selectBookRadioGroup"
                            value={i}
                            checked={selectedBookNum === i}
                            onClick={onChkBoxChange}
                          />
                          <b></b>
                          {bookInfo.GOODS_NM.replace(
                            SPECIAL_CHAR_BOOK_NAME_REG_EX,
                            ""
                          )}
                        </Item.Header>
                        <Item.Meta>
                          <b>금액 : </b>
                          <span className="price">{bookInfo.SALE_PR} (원)</span>
                          <br />
                          <br />
                          <b>저자 : </b>
                          <span className="price">
                            {bookInfo.AUTH_INFO.replace(CHAR_REG_EX, "")}
                          </span>
                          <br />
                          <br />
                          <b>출판사 : </b>
                          <span className="price">
                            {bookInfo.COMPANY2.replace(SPECIAL_CHAR_REG_EX, "")}
                          </span>
                          <br />
                          <br />
                          <b>출판일 : </b>
                          <span className="price">
                            {convertDateFormatStr(bookInfo.ISS_DM)}
                          </span>
                          <br />
                          <br />
                        </Item.Meta>
                        <Item.Extra>
                          <Button
                            onClick={() =>
                              onClickShowDetailBookInfo(bookInfo.GOODS_NO)
                            }
                          >
                            상세 페이지로 이동
                          </Button>
                        </Item.Extra>
                      </Item.Content>
                    </Item>
                    <Divider></Divider>
                  </Item.Group>
                );
              })
            ) : (
              <div>검색 도서가 없습니다.</div>
            )}
          </Segment>
        </Segment.Group>
      </Modal.Content>
      <Modal.Actions>
        <Pagination
          pointing
          secondary
          activePage={active}
          totalPages={totalPage}
          onPageChange={onPaginationChange}
        />
        <Button color="green" onClick={() => onSubmit(selectedBookNum)}>
          <Icon name="checkmark" /> 확인
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalPopup;

export function convertDateFormatStr(date) {
  let dateFormatStr = `${date.substring(0, 4)}/${date.substring(
    4,
    6
  )}/${date.substring(6, 8)}`;
  return dateFormatStr;
}
