import React from "react";
import LoginForm from "./LoginForm";
import { Grid, Header, Image } from "semantic-ui-react";

const Login = ({ onSubmit, error }) => {
  return (
    <Grid verticalAlign="middle" style={{ height: "90vh" }} centered={true}>
      <Grid.Row verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 350 }}>
          <Header as="h2" color="black" textAlign="center">
            <Image src="/static/images/logo.PNG" /> 도서 신청
          </Header>
          <LoginForm onSubmit={onSubmit} errorMsg={error} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Login;
