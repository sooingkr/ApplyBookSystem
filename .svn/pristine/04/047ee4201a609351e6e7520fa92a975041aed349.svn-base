import React from "react";
import { Grid, Container, Header, Divider } from "semantic-ui-react";
import BookRequestForm from "./BookRequestForm";

const BookRequest = ({
  onSubmit,
  error,
  onClickForSearchBook,
  onClickCancel
}) => {
  return (
    <Container style={{ padding: "6em 0em" }}>
      <Header as="h2">도서 신청</Header>
      <Divider section />
      <Grid verticalAlign="middle" centered={true}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 550, marginTop: 70 }}>
            <BookRequestForm
              onSubmit={onSubmit}
              errorMsg={error}
              onClickForSearchBook={onClickForSearchBook}
              onClickCancel={onClickCancel}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default BookRequest;
