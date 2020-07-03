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
  Dimmer,
  Loader
} from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { requestKyoboInfoAction } from "../actionCreators";
import {
  SPECIAL_CHAR_REG_EX,
  SPECIAL_CHAR_BOOK_NAME_REG_EX,
  CHAR_REG_EX
} from "../../../common/constants/commonConstant";

const EbookModalPopup = ({
  onClose,
  onSubmit,
  kyoboBookInfoList,
  onClickShowDetailBookInfo,
  searchBookName
}) => {
  const dispatch = useDispatch();
  const { isKyoboRequesting } = useSelector(state => state.requestBookReducer);
  const [selectedBookNum, setSelectedBookNum] = useState(0);
  const [active, setActive] = useState(1);
  const [firstIndex, setFirstIndex] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [pageLastCount, setPageLastCount] = useState(1);
  const [count] = useState(3);
  const [bookListInfo, setBookListInfo] = useState(null);

  const onChkBoxChange = useCallback(
    (e, { value }) => {
      setSelectedBookNum(value);
    },
    [setSelectedBookNum]
  );

  const onPaginationChange = useCallback(
    (e, { activePage }) => {
      setActive(activePage);
      setFirstIndex(Number(activePage) * count - count);

      dispatch(
        requestKyoboInfoAction({
          bookName: escape(searchBookName),
          active: Number(activePage)
        })
      );
    },
    [dispatch, count, searchBookName]
  );

  useEffect(() => {
    let totalCount = 0;

    if (kyoboBookInfoList == null || kyoboBookInfoList === "") {
      return;
    }

    // eslint-disable-next-line no-array-constructor
    let array = new Array();

    // eslint-disable-next-line array-callback-return
    kyoboBookInfoList.result.map((info, i) => {
      array.push(info.tot_RELATE_HTML_LIST.split("$@"));
    });

    setBookListInfo(array);

    totalCount = Number(kyoboBookInfoList.totalCount);
    setTotalPage(Number(Math.ceil(totalCount / count)));

    if (Number(totalPage) === Number(active)) {
      setPageLastCount(totalCount);
    } else {
      setPageLastCount(firstIndex + count);
    }
  }, [kyoboBookInfoList, totalPage, active, pageLastCount, firstIndex, count]);

  return (
    <Modal closeIcon open={true} onClose={onClose}>
      <Header icon="book" content="교보문고 EBook 검색 목록" />
      <Modal.Content>
        <Segment.Group>
          <Segment>
            {isKyoboRequesting ? (
              <Dimmer inverted active>
                <Loader content="Loading" />
              </Dimmer>
            ) : null}
            {bookListInfo != null && bookListInfo.length > 0 ? (
              bookListInfo.map((bookInfo, i) => {
                return (
                  <Item.Group divided key={bookInfo[0]}>
                    <Item>
                      <Item.Image
                        src={
                          bookInfo[14]
                            .replace(SPECIAL_CHAR_BOOK_NAME_REG_EX, "")
                            .replace("medium", "large")
                            .substring(0, 51) +
                          "l" +
                          bookInfo[14]
                            .replace(SPECIAL_CHAR_BOOK_NAME_REG_EX, "")
                            .substr(53)
                        }
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
                          {bookInfo[2].replace(
                            SPECIAL_CHAR_BOOK_NAME_REG_EX,
                            ""
                          )}
                        </Item.Header>
                        <Item.Meta>
                          <b>금액 : </b>
                          <span className="price">
                            {bookInfo[7].replace(
                              SPECIAL_CHAR_BOOK_NAME_REG_EX,
                              ""
                            )}
                            (원)
                          </span>
                          <br />
                          <br />
                          <b>저자 : </b>
                          <span className="price">
                            {bookInfo[3].replace(CHAR_REG_EX, "")}
                          </span>
                          <br />
                          <br />
                          <b>출판사 : </b>
                          <span className="price">
                            {bookInfo[4].replace(SPECIAL_CHAR_REG_EX, "")}
                          </span>
                          <br />
                          <br />
                          <b>출판일 : </b>
                          <span className="price">
                            {bookInfo[5] + "년" + bookInfo[6] + "월"}
                          </span>
                          <br />
                          <br />
                        </Item.Meta>
                        <Item.Extra>
                          <Button
                            onClick={() =>
                              onClickShowDetailBookInfo(
                                bookInfo[0].replace(
                                  SPECIAL_CHAR_BOOK_NAME_REG_EX,
                                  ""
                                )
                              )
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
        <Button
          color="green"
          onClick={() => onSubmit(bookListInfo[selectedBookNum])}
        >
          <Icon name="checkmark" /> 확인
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default EbookModalPopup;

export function convertDateFormatStr(date) {
  let dateFormatStr = `${date.substring(0, 4)}/${date.substring(
    4,
    6
  )}/${date.substring(6, 8)}`;
  return dateFormatStr;
}
