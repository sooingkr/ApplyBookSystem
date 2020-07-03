import React, { useState, useCallback } from "react";
import TextareaAutosize from "react-textarea-autosize";
import {
  Button,
  Modal,
  Header,
  Icon,
  Radio,
  Segment,
  Form
} from "semantic-ui-react";

const ModalPopup = ({ onClose, onSubmit }) => {
  const [status, setStatus] = useState("APPROVAL");
  const [rejectReason, setRejectReason] = useState("");
  const [textDisable, setTextDisable] = useState(true);

  const onRadioChange = useCallback((e, { value }) => {
    setStatus(radio => {
      return value;
    });

    if (value === "REJECT") {
      setTextDisable(textDisable => {
        return false;
      });
    } else {
      setTextDisable(textDisable => {
        return true;
      });
    }
  }, []);

  const onTextareaChange = useCallback(e => {
    const value = e.target.value;
    setRejectReason(text => {
      return value;
    });
  }, []);

  return (
    <Modal closeIcon open={true} onClose={onClose}>
      <Header icon="book" content="도서 신청 승인/반려" />
      <Modal.Content>
        <Segment.Group>
          <Form>
            <Segment>
              <Form.Field>
                <Radio
                  label="승인"
                  type="radio"
                  name="radioGroup"
                  value="APPROVAL"
                  checked={status === "APPROVAL"}
                  onChange={onRadioChange}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label="반려"
                  type="radio"
                  name="radioGroup"
                  value="REJECT"
                  checked={status === "REJECT"}
                  onChange={onRadioChange}
                />
              </Form.Field>
            </Segment>
          </Form>
          <Segment>
            <Form>
              <Form.Field
                control={TextareaAutosize}
                name="rejectReason"
                placeholder="반려 사유를 적어주세요."
                onChange={onTextareaChange}
                useCacheForDOMMeasurements
                value={rejectReason}
                disabled={textDisable}
              />
            </Form>
          </Segment>
        </Segment.Group>
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" onClick={() => onSubmit(rejectReason, status)}>
          <Icon name="checkmark" /> 확인
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalPopup;
