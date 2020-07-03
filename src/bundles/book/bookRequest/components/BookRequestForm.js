import React from "react";
import { Form, Input, Button, Message, Label } from "semantic-ui-react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import "react-widgets/dist/css/react-widgets.css";
import momentLocalizer from "react-widgets-moment";
import TextareaAutosize from "react-textarea-autosize";
import moment from "moment";
momentLocalizer();

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
        ((error && <span style={{ color: "red" }}>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const validate = values => {
  const errors = {};

  let numberChkRegex = /[^0-9]/g;

  if (!values.bookName) {
    errors.bookName = "신청 도서명을 입력해주세요.";
  }

  if (!values.reqUrl) {
    errors.reqUrl = "도서신청 url을 입력해주세요.";
  }

  if (!values.address) {
    errors.address = "배송지를 입력해주세요.";
  }

  if (!values.price) {
    errors.price = "도서 금액을 입력해주세요.";
  } else {
    if (numberChkRegex.test(values.price))
      errors.price = "금액은 숫자만 입력 가능합니다.";
  }

  return errors;
};

const rendertextarea = ({ input, label }) => {
  return (
    <div>
      <Label>{label}</Label>
      <TextareaAutosize {...input} maxRows={5}></TextareaAutosize>
    </div>
  );
};

const presentValue = moment().format("YYYYMM");

let BookRequestForm = props => {
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    onSubmit,
    errorMsg,
    onClickForSearchBook,
    onClickCancel,
    bookTypeValue
  } = props;

  const { isRequesting } = useSelector(state => state.requestBookReducer);

  const errorMessage = () => {
    return errorMsg ? (
      <Message>
        <span>{errorMsg}</span>
      </Message>
    ) : null;
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group widths="equal">
        <Form.Field required={true}>
          <Label>신청구분</Label>
          <Field
            id="bookType"
            name="bookType"
            required={true}
            label="신청구분"
            component="select"
          >
            <option value="일반도서">일반도서</option>
            <option value="전자책">전자책</option>
          </Field>
        </Form.Field>

        {bookTypeValue === "전자책" && (
          <Form.Field required={true}>
            <Label>ebook 사이트</Label>

            <Field
              id="ebookStore"
              name="ebookStore"
              required={true}
              label="신청구분"
              component="select"
            >
              <option value="교보문고">교보문고</option>
              <option value="리디북스">리디북스</option>
            </Field>
          </Form.Field>
        )}
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Field required={true}>
          <Field
            name="bookName"
            type="text"
            component={renderField}
            label="도서명"
          />
        </Form.Field>
        <Form.Field style={{ marginTop: "26px" }}>
          <Button primary onClick={onClickForSearchBook}>
            검색
          </Button>
        </Form.Field>
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Field>
          <Label htmlFor="reqType">개인/공용</Label>
          <Field id="reqType" name="reqType" required={true} component="select">
            <option value="01">개인</option>
            <option value="02">공통</option>
          </Field>
        </Form.Field>
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Field>
          <Field
            name="reqUrl"
            id="reqUrl"
            label="도서구매url"
            placeholder="URL"
            component={renderField}
          />
        </Form.Field>
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Field>
          <Field
            name="address"
            id="address"
            label="배송지"
            placeholder="배송지"
            component={renderField}
          />
        </Form.Field>
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Field required={true}>
          <Field
            id="price"
            name="price"
            type="number"
            component={renderField}
            label="가격"
          />
        </Form.Field>
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Field>
          <Field id="etc" name="etc" component={rendertextarea} label="비고" />
        </Form.Field>
      </Form.Group>
      <Field name="errorMessage" component={errorMessage} />
      <Form.Field>
        <Button primary type="submit" loading={isRequesting}>
          신청하기
        </Button>
        <Button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
        <Button type="button" color="google plus" onClick={onClickCancel}>
          취소
        </Button>
      </Form.Field>
    </Form>
  );
};

BookRequestForm = reduxForm({
  form: "BookRequestForm",
  validate,
  warn,
  initialValues: {
    bookType: "일반도서",
    ebookStore: "교보문고",
    reqYearMonth: presentValue,
    reqType: "01",
    bookName: "",
    reqUrl: "",
    address: "회사",
    price: 0,
    etc: ""
  }
})(BookRequestForm);

const selector = formValueSelector("BookRequestForm");
BookRequestForm = connect(state => {
  const bookTypeValue = selector(state, "bookType");

  return {
    bookTypeValue
  };
})(BookRequestForm);

export default BookRequestForm;
