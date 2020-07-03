import React from "react";
import { Segment, Label, Dimmer, Loader } from "semantic-ui-react";
import {
  REQ_TYPE_PRIVATE,
  REQ_TYPE_PRIVATE_NM,
  REQ_TYPE_COMMON,
  REQ_TYPE_COMMON_NM
} from "../../../common/constants/commonConstant";

const scroll = {
  height: 100,
  overflow: "auto",
  wordBreak: "break-all"
};
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

const onUrlClick = url => {
  window.open(url, "_blank").focus();
};

const BookDetailTable = ({ book }) => {
  return book ? (
    <Segment.Group>
      <Segment attached="top">{book.bookName}</Segment>
      <Segment>{book.bookType}</Segment>
      <Segment attached>
        <Label as="a" onClick={() => onUrlClick(book.reqUrl)}>
          {book.reqUrl}
        </Label>
      </Segment>
      <Segment attached>{book.address}</Segment>
      <Segment attached>{book.mbrName}</Segment>
      <Segment attached>{book.price}원</Segment>
      <Segment attached>{reqTypeToKorean(book.reqType)}</Segment>
      <Segment attached>{convertDateFormatForMonth(book.reqYearMonth)}</Segment>
      <Segment attached>{timestampToDate(book.regDt)}</Segment>
      <Segment attached>{statusToKorean(book.status)}</Segment>
      <Segment style={scroll} attached>
        {book.etc
          ? book.etc.split("\n").map((line, i) => {
              return (
                <span key={i}>
                  {line}
                  <br />
                </span>
              );
            })
          : "-"}
      </Segment>
      <Segment style={scroll} attached="bottom">
        {book.rejectReason
          ? book.rejectReason.split("\n").map(line => {
              return (
                <>
                  {line}
                  <br />
                </>
              );
            })
          : "-"}
      </Segment>
    </Segment.Group>
  ) : (
    <Dimmer active inverted>
      <Loader>Loading...</Loader>
    </Dimmer>
  );
};

export default BookDetailTable;

function convertDateFormatForMonth(dateStr) {
  let formatedDateStr =
    dateStr && `${dateStr.substring(0, 4)}.${dateStr.substring(4, 6)}`;
  return formatedDateStr;
}
