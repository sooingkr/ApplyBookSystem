import React, { useState, useEffect, useCallback } from "react";
import { Field, reduxForm, formValueSelector, change } from "redux-form";
import { connect, useDispatch } from "react-redux";
import { Form, Input, Button } from "semantic-ui-react";

import DropdownList from "react-widgets/lib/DropdownList";
import moment from "moment";
import momentLocalizer from "react-widgets-moment";

import "react-widgets/dist/css/react-widgets.css";

momentLocalizer(moment);

const typeOptions = ["개인", "공용"];

const renderInputField = ({
  input,
  data,
  select,
  valueField,
  textField,
  disabled,
  placeholder
}) => {
  return select === "reqType" ? (
    <DropdownList
      style={{ width: 100 }}
      {...input}
      data={data}
      onChange={input.onChange}
      defaultValue={data[0]}
    />
  ) : (
    <Input {...input} disabled={disabled} placeholder={placeholder}></Input>
  );
};

let SearchBar = props => {
  const dispatch = useDispatch();
  const { handleSubmit, selectconditionvalue } = props;
  const [onInput, setOnInput] = useState(true);
  const [placeholderText, setPlaceHolderText] = useState("");
  const [select, setSelect] = useState("");

  const onSelectChange = useCallback(
    (event, newValue, previousValuem, name) => {
      if (newValue === "reqType") {
        setSelect("reqType");
        dispatch(change("searchBarForm", "selectValue", "개인"));
      } else {
        setSelect("");
        dispatch(change("searchBarForm", "selectValue", ""));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    if (selectconditionvalue === "all" || selectconditionvalue === null) {
      setOnInput(true);
    } else {
      setOnInput(false);
    }

    if (selectconditionvalue === "reqYearMonth") {
      setPlaceHolderText("ex. 202001");
    } else {
      setPlaceHolderText("");
    }
  }, [selectconditionvalue, setOnInput, setPlaceHolderText, placeholderText]);

  return (
    <Form>
      <Form.Group>
        <Form.Field>
          <Field
            component="select"
            name="selectCondition"
            onChange={onSelectChange}
          >
            <option value="all">전체</option>
            <option value="bookName">책이름</option>
            {window.localStorage.getItem("adminYn") === "Y" && (
              <>
                <option value="empNum">사원번호</option>
                <option value="mbrName">이름</option>
              </>
            )}
            <option value="reqYearMonth">신청년월</option>
            <option value="reqType">개인/공용</option>
          </Field>
        </Form.Field>
        <Form.Field>
          <Field
            name="selectValue"
            placeholder={placeholderText}
            component={renderInputField}
            disabled={onInput}
            data={typeOptions}
            props={{
              select: select
            }}
          />
        </Form.Field>
        <Form.Field>
          <Button
            type="button"
            onClick={handleSubmit(props.onSubmit)}
            color={"blue"}
          >
            검색
          </Button>
        </Form.Field>
      </Form.Group>
    </Form>
  );
};

SearchBar = reduxForm({
  form: "searchBarForm",
  initialValues: { selectCondition: null, selectValue: "" }
})(SearchBar);

const selector = formValueSelector("searchBarForm");

SearchBar = connect(state => {
  const selectconditionvalue = selector(state, "selectCondition");
  return {
    selectconditionvalue
  };
})(SearchBar);

export default SearchBar;
