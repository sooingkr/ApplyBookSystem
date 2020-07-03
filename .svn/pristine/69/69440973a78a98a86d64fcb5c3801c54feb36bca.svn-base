import React from "react";
import { Segment } from "semantic-ui-react";

const columns = [
  "도서명",
  "유형",
  "URL",
  "배송지",
  "이름",
  "가격",
  "개인/공용",
  "신청년월",
  "등록일시",
  "상태",
  "비고",
  "반려사유"
];

const BookDetailColum = () => {
  return (
    <Segment.Group>
      {columns.map(colum => {
        return colum === "비고" || colum === "반려사유" ? (
          <Segment style={{ height: 100 }} key={colum} attached>
            {colum}
          </Segment>
        ) : (
          <Segment key={colum} attached>
            {colum}
          </Segment>
        );
      })}
    </Segment.Group>
  );
};

export default BookDetailColum;
