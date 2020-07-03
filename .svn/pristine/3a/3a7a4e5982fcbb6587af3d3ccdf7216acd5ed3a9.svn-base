import React from "react";
import { Container, Header, Grid, Divider } from "semantic-ui-react";
import BookDetailTable from "./BookDetailTable";
import CommonButton from "../../../common/components/Button/Button";
import BookDetailColum from "./BookDetailColum";

const BookDetail = ({
  book,
  isAdmin,
  onUpdateClick,
  onCancleClick,
  onRegisterClick,
  isRequest,
  isApproval,
  onClickCancel
}) => {
  return (
    <Container style={{ padding: "6em 0em" }}>
      <Header as="h2">도서 상세 조회</Header>
      <Divider section />
      <Grid verticalAlign="middle" centered={true}>
        <Grid.Row>
          <Grid.Column width={3}>
            <BookDetailColum />
          </Grid.Column>
          <Grid.Column width={12}>
            <BookDetailTable book={book} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          {isAdmin === "Y" && (
            <>
              <CommonButton
                name="업데이트"
                onDisable={!isRequest}
                click={onUpdateClick}
                color={"blue"}
              />
            </>
          )}
          <>
            <CommonButton
              name="신청취소"
              onDisable={!isRequest}
              click={onCancleClick}
            />
            <CommonButton
              name="수령등록"
              onDisable={!isApproval}
              click={onRegisterClick}
            />
            <CommonButton name="취소" color={"red"} click={onClickCancel} />
          </>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default BookDetail;
