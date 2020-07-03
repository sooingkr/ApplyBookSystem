import React from "react";
import JoinForm from "./JoinForm";
import { Grid, Header, Image } from "semantic-ui-react";

const Join = ({ onSubmit, error, onClickCancel }) => {

  return (
    <Grid verticalAlign="middle" style={{ height: "90vh" }} centered={true}>
      <Grid.Row verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 550 }}>
          <Header as="h2" color="black" textAlign="center">
            <Image src="/static/images/logo.PNG" /> 회원가입
          </Header>
          <JoinForm onSubmit={onSubmit} errorMsg={error} onClickCancel={onClickCancel} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Join;
