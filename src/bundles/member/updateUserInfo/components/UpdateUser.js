import React from "react";
import UpdateUserForm from "./UpdateUserForm";
import { Grid, Header, Image } from "semantic-ui-react";

const UpdateUser = ({ onSubmit, error, onClickCancel }) => {

  return (
    <Grid verticalAlign="middle" style={{ height: "90vh" }} centered={true}>
      <Grid.Row verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 550 }}>
          <Header as="h2" color="black" textAlign="center">
            <Image src="/static/images/logo.PNG" /> 비밀번호 변경
          </Header>
          <UpdateUserForm onSubmit={onSubmit} errorMsg={error} onClickCancel={onClickCancel} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default UpdateUser;
