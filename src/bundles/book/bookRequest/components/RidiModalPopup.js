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
import { requestRidiInfoAction } from "../actionCreators";
import { RIDI_GOODS_IMG_URL } from "../../../common/constants/commonConstant";

const RidiModalPopup = ({
  onClose,
  onSubmit,
  ridiBookInfo,
  onClickShowDetailBookInfo,
  searchBookName
}) => {
  const dispatch = useDispatch();
  const { isRidiRequesting } = useSelector(state => state.requestBookReducer);
  const [selectedBookNum, setSelectedBookNum] = useState(0);
  const [active, setActive] = useState(1);
  const [firstIndex, setFirstIndex] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [pageLastCount, setPageLastCount] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(24);

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
        requestRidiInfoAction({
          bookName: searchBookName,
          active: Number(activePage)
        })
      );
    },
    [count, dispatch, searchBookName]
  );

  useEffect(() => {
    let totalCount = 0;

    if (ridiBookInfo) {
      totalCount = Number(ridiBookInfo.result.data.totalCount.replace(",", ""));
      setTotalPage(Number(Math.ceil(totalCount / count)));
    }

    if (Number(totalPage) === Number(active)) {
      setPageLastCount(totalCount);
    } else {
      setPageLastCount(firstIndex + count);
    }
  }, [ridiBookInfo, totalPage, active, pageLastCount, firstIndex, count]);

  return (
    <Modal closeIcon open={true} onClose={onClose}>
      <Header icon="book" content="리디북스 검색 목록" />
      <Modal.Content>
        <Segment.Group>
          <Segment>
            {isRidiRequesting ? (
              <Dimmer inverted active>
                <Loader content="Loading" />
              </Dimmer>
            ) : null}
            {ridiBookInfo != null &&
            ridiBookInfo.result.data.books.length > 0 ? (
              ridiBookInfo.result.data.books.map((bookInfo, i) => {
                const id = bookInfo.reqUrl.substring(
                  bookInfo.reqUrl.indexOf("id=") + 3,
                  bookInfo.reqUrl.indexOf("&")
                );
                return (
                  <Item.Group divided key={i + bookInfo.bookName}>
                    <Item>
                      <Item.Image
                        src={`${RIDI_GOODS_IMG_URL}${id}/large`}
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
                          {bookInfo.bookName}
                        </Item.Header>
                        <Item.Meta>{bookInfo.subTitle}</Item.Meta>
                        <br></br>
                        <Item.Meta>
                          <b>금액 : </b>
                          <span className="price">
                            {bookInfo.ridiPrice} (원)
                          </span>
                          <br />
                          <br />
                          <b>저자 : </b>
                          <span className="price">{bookInfo.author}</span>
                          <br />
                          <br />
                          <b>출판사 : </b>
                          <span className="price">{bookInfo.publisher}</span>
                          <br />
                        </Item.Meta>
                        <Item.Extra>
                          <Button
                            onClick={() =>
                              onClickShowDetailBookInfo(bookInfo.reqUrl)
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
          onClick={() =>
            onSubmit(ridiBookInfo.result.data.books[selectedBookNum])
          }
        >
          <Icon name="checkmark" /> 확인
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default RidiModalPopup;

export function convertDateFormatStr(date) {
  let dateFormatStr = `${date.substring(0, 4)}/${date.substring(
    4,
    6
  )}/${date.substring(6, 8)}`;
  return dateFormatStr;
}
