import React, { useEffect, useCallback } from "react";
import { Join } from "./";
import { joinAction, JOIN_INIT } from "../actionCreators";
import { getFormValues } from "redux-form";
import { useDispatch, connect, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { JOIN_SUCCESS_MSG } from "../../common/constants/commonConstant";

const JoinContainer = ({ values, history }) => {
  const dispatch = useDispatch();
  const { isJoined, joinErrorReason } = useSelector(state => state.joinReducer);

  const onSubmit = e => {
    const { empNum, id, name, password } = values;
    dispatch(joinAction({ empNum, id, name, password }));
  };

  const onClickCancel = useCallback(e => {
    history.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isJoined) {
      alert(JOIN_SUCCESS_MSG);
      dispatch({
        type: JOIN_INIT
      });
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isJoined, joinErrorReason]);

  return (
    <Join
      onSubmit={onSubmit}
      error={joinErrorReason}
      onClickCancel={onClickCancel}
    ></Join>
  );
};

export default connect(state => ({
  values: getFormValues("JoginForm")(state)
}))(withRouter(JoinContainer));
