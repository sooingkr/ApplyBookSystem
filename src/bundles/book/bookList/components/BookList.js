import React from "react";
import { Link } from "react-router-dom";
import { BookListTable } from "./";
import SearchBar from "./SearchBar";
import { Grid, Container } from "semantic-ui-react";
import Button from "../../../common/components/Button/Button";

const BookList = props => {
  return (
    <Container
      style={{ padding: "6em 0em", minHeight: "90vh", overflowX: "hidden" }}
    >
      <Grid divided="vertically" verticalAlign="middle" centered>
        <Grid.Row centered columns={2}>
          <Grid.Column floated={"left"}>
            <SearchBar onSubmit={props.onSubmit} />
          </Grid.Column>
          <Grid.Column floated={"right"} textAlign={"right"}>
            <Link to="/bookRequest">
              <Button name="도서신청" color={"green"}></Button>
            </Link>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column style={{ maxWidth: 2800 }}>
            <BookListTable
              books={props.books}
              onTableRowDoubleClick={props.onTableRowDoubleClick}
              Loading={props.Loading}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default BookList;
