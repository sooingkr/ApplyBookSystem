import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Form, Button, Input, Message } from "semantic-ui-react";
import { useSelector } from 'react-redux';
import { REG_EX_PASSWORD } from "../../../common/constants/commonConstant";

const validate = values => {
  const errors = {};

  if(!values.oldPassword) {
    errors.oldPassword = "현재 비밀번호를 입력해주세요.";
  } 

  if (!REG_EX_PASSWORD.test(values.password)) {
    errors.password = "비밀번호는 특수문자 포함 8~15자 여야합니다."
  }

  if (!values.password) {
    errors.password = "비밀번호를 입력해주세요.";
  }

  if (!values.passwordConFirm) {
    errors.passwordConFirm = "비밀번호 확인을 입력해주세요.";
  }

  if(values.passwordConFirm !== values.password) {
    errors.passwordConFirm = "비밀번호와 비밀번호 확인이 일치하지 않습니다.";
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
    <div>
      <Input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const UpdateUserForm = props => {
  const { handleSubmit, pristine, reset, submitting, errorMsg, onSubmit, onClickCancel } = props;

  const { isUpdatingUser } = useSelector(state=>state.joinReducer);

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
        <Field name="oldPassword" type="password" component={renderField} label="현재 비밀번호" />
      </Form.Field>
      <Form.Field>
        <Field name="password" type="password" component={renderField} label="변경할 비밀번호" />
      </Form.Field>
      <Form.Field>
        <Field name="passwordConFirm" type="password" component={renderField} label="비밀번호 확인" />
      </Form.Field>
      <Field name="errorMessage" component={errorMessage} />
      <Form.Field>
        <Button primary type="submit" loading={isUpdatingUser}>수정</Button>
        <Button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
        <Button color='google plus' type="button" onClick={onClickCancel}>취소</Button>
      </Form.Field>
    </Form>
  );
};

export default connect()(
  reduxForm({
    form: "UpdateUserForm",
    validate,
    warn
  })(UpdateUserForm)
);
