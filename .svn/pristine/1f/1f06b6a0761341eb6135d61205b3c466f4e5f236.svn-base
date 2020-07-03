import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import { Menu } from "./";
import { logout } from "../../../common/actionCreators/";

const MenuContainer = ({ history }) => {
  const dispath = useDispatch();

  const onButtonClick = useCallback(() => {
    dispath(logout());
    history.push("/");
  }, [history, dispath]);

  const onButtonClickForModifyMember = () => {
    history.push("/updateUserInfo");
  };

  return (
    <Menu
      onButtonClick={onButtonClick}
      onButtonClickForModifyMember={onButtonClickForModifyMember}
    />
  );
};

export default withRouter(MenuContainer);
