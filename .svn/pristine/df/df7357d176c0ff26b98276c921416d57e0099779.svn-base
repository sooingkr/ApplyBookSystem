import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Form, Button, Input, Message } from "semantic-ui-react";
import { useSelector } from 'react-redux';
import { SUCCESS, REG_EX_PASSWORD, REG_EX_EMP_NUM } from "../../common/constants/commonConstant";

const validate = values => {
  const errors = {};

  if (!values.empNum) {
    errors.empNum = "사번을 입력해주세요.";
  } else {
    if(!REG_EX_EMP_NUM.test(values.empNum)) {
      errors.empNum = "사번은 최대 6자리의 숫자입니다.";
    }
  }

  if (!values.id) {
    errors.id = "아이디를 입력해주세요.";
  }

  if (!values.name) {
    errors.name = "이름을 입력해주세요.";
  }

  if (!values.password) {
    errors.password = "비밀번호를 입력해주세요.";
  } else {
    if(!REG_EX_PASSWORD.test(values.password)) {
      errors.password = "비밀번호는 특수문자 포함 8~15자 여야합니다.";
    }
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
        ((error && <span style={{color:'red'}}>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const JoginForm = props => {
  const { handleSubmit, pristine, reset, submitting, errorMsg, onSubmit, onClickCancel } = props;

  const { isJoining } = useSelector(state=>state.joinReducer);

  const errorMessage = () => {
    
    return errorMsg && errorMsg.retCode !== SUCCESS ? (
      <Message>
        <span style={{color:'red'}}>{errorMsg.userMsg}</span>
      </Message>
    ) : null;
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Field>
        <Field name="empNum" type="text" component={renderField} label="사번" />
      </Form.Field>
      <Form.Field>
        <Field name="id" type="text" component={renderField} label="아이디" />
      </Form.Field>
      <Form.Field>
        <Field name="name" type="text" component={renderField} label="이름" />
      </Form.Field>
      <Form.Field>
        <Field
          name="password"
          type="password"
          component={renderField}
          label="비밀번호"
        />
      </Form.Field>
      <Form.Field>
        <Field
          name="passwordConFirm"
          type="password"
          component={renderField}
          label="비밀번호 확인"
        />
      </Form.Field>
      <Field name="errorMessage" component={errorMessage} />
      <Form.Field>
        <Button primary type="submit" loading={isJoining}>가입</Button>
        <Button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
        <Button type="button" color='google plus' onClick={onClickCancel}>취소</Button>
      </Form.Field>
    </Form>
  );
};

export default connect()(
  reduxForm({
    form: "JoginForm",
    validate,
    warn
  })(JoginForm)
);
