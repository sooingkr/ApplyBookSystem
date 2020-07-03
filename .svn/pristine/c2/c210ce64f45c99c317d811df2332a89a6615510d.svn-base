import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Button, Input, Label, Message } from "semantic-ui-react";

const validate = values => {
  const errors = {};
  if (!values.mbrId) {
    errors.mbrId = "아이디를 입력해주세요.";
  }

  if (!values.password) {
    errors.password = "비밀번호를 입력해주세요.";
  }

  return errors;
};

const warn = values => {
  const warnings = {};
  if (values.id === undefined) {
    warnings.id = "아이디가 입력되지않았습니다.";
  }
  return warnings;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <Label>{label}</Label>
    <div>
      <Input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const LoginForm = props => {
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    onSubmit,
    errorMsg
  } = props;

  const errorMessage = () => {
    return errorMsg ? (
      <Message>
        <span style={{color:'red'}}>{errorMsg}</span>
      </Message>
    ) : null;
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Field>
        <Field
          name="mbrId"
          type="text"
          component={renderField}
          label="아이디"
        />
      </Form.Field>
      <Form.Field>
        <Field
          name="password"
          type="password"
          component={renderField}
          label="비밀번호"
        />
      </Form.Field>
      <Field name="errorMessage" component={errorMessage} />
      <Form.Field>
        <Button type="submit" color={'blue'}>LOGIN</Button>
        <Button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
        <Link to="/join">
          <Button type="button" onClick={reset} floated="right" color={'red'}>
            JOIN
          </Button>
        </Link>
      </Form.Field>
    </Form>
  );
};

export default connect()(
  reduxForm({
    form: "loginForm", 
    validate,
    warn
  })(LoginForm)
);
