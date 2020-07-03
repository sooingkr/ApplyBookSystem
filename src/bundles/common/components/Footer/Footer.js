import React from "react";
import { Icon, Image, Container, List, Segment } from "semantic-ui-react";

const Footer = props => {
  return (
    <Segment inverted style={{ padding: "3em 0em" }} vertical>
      <Container textAlign="center">
        <List horizontal inverted divided link size="small">
          <List.Item
            as="a"
            href="https://www.dayside.co.kr/homepage/html/pc/main.html"
          >
            <Image src="/static/images/footer-logo.png" />
          </List.Item>
          <List.Item>
            06130, 서울시 강남구 강남대로 94길 53 화성빌딩 4층 (주)데이사이드
          </List.Item>
          <List.Item>
            <Icon name="phone" size="small" />
            02-569-7990
          </List.Item>
          <List.Item>
            <Icon name="fax" size="small" />
            070-7500-1400
          </List.Item>
        </List>
      </Container>
    </Segment>
  );
};

export default Footer;
