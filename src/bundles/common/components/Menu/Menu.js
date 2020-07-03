import React from "react";
import { Button, Image, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const MenuLayout = props => (
  <div>
    <Menu fixed="top" inverted>
      <Menu.Item
        header
        key="menuHeader"
        as="a"
        href="https://www.dayside.co.kr/homepage/html/pc/main.html"
      >
        <Image
          size="mini"
          src="/static/images/footer-logo.png"
          style={{ marginRight: "1.5em" }}
        />
      </Menu.Item>
      {window.localStorage.getItem("token") ? (
        <Menu.Item key={"menu"}>
          <Link to="/">신청현황</Link>
        </Menu.Item>
      ) : null}
      <Menu.Item position="right" key={"rightSection"}>
        {window.localStorage.getItem("token") ? (
          <div>
            <Button
              primary
              as="a"
              inverted={false}
              onClick={props.onButtonClickForModifyMember}
            >
              비밀번호 수정
            </Button>
            <Button as="a" inverted={false} onClick={props.onButtonClick}>
              로그아웃
            </Button>
          </div>
        ) : null}
      </Menu.Item>
    </Menu>
  </div>
);

export default MenuLayout;
