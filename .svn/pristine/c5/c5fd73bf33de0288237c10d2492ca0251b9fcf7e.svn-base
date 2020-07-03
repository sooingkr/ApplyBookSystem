import React, { useEffect, useState } from "react";
import { Login } from "./";
import { loginAction } from "../actionCreators";
import { getFormValues } from "redux-form";
import { useDispatch, connect, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { SUCCESS } from "../../common/constants/commonConstant";

const LoginContainer = ({ values, history }) => {
  const [error, setError] = useState(null);
  const dispath = useDispatch();

  const { loginInfo, loginError } = useSelector(({ loginReducer }) => ({
    loginInfo: loginReducer.loginInfo,
    loginError: loginReducer.loginError
  }));

  const onSubmit = e => {
    const { mbrId, password } = values;
    dispath(loginAction({ mbrId, password }));
  };

  useEffect(() => {
    if (loginError !== null) {
      if (SUCCESS !== loginError.retCode) {
        setError(loginError.userMsg);
      }
      return;
    }

    if (loginInfo) {
      try {
        localStorage.setItem("token", loginInfo.token);
        localStorage.setItem("adminYn", loginInfo.adminYn);

        history.push("/");
      } catch (e) {
        console.log("localStorage is not working");
      }
    }
  }, [loginInfo, loginError, history]);

  useEffect(() => {
    setError(null);
  }, [history]);

  return <Login onSubmit={onSubmit} error={error}></Login>;
};

export default connect(state => ({
  values: getFormValues("loginForm")(state)
}))(withRouter(LoginContainer));
