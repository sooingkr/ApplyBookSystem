import React from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { bookUpdateAction } from "../actionCreators";
import ModalPopup from "./ModalPopup";

const ModalContainer = ({ history, onClose, ordNum }) => {
  const dispatch = useDispatch();

  const onSubmit = (rejectReason, status) => {
    dispatch(bookUpdateAction({ ordNum, rejectReason, status }));
  };

  return <ModalPopup onClose={onClose} onSubmit={onSubmit} />;
};

export default withRouter(ModalContainer);
