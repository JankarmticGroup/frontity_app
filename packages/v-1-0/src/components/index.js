import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";

// import connect to manage state
//import global styled, and css for styling
import { connect, Global, css, styled } from "frontity";
import Link from "@frontity/components/link";
// differentiate between data types for post and pages
import Switch from "@frontity/components/switch";
// import list of available data
import List from "./list";
//import post
import Post from "./post";
//import page
import Page from "./page";
import logo from "../images/logo.png";
import cart from "../images/cart.png";
import services from "../images/services.jpg";
import aboutus from "../images/aboutus.png";

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            background-color: black;
          }
          html {
            font-family: system-ui, Verdana, Arial, sans-serif;
            color: purple;
            display: grid;
          }
        `}
      />
      <Container>
        <Header>
          <Row xs="3">
            <Col>
              <img
                className="logo"
                src={logo}
                height="75px"
                width="75px"
                alt="Logo"
              />
            </Col>
            <Col>
              <main>
                <Switch>
                  <List when={data.isArchive} />
                  <Post when={data.isPost} />
                  <Page when={data.isPage} />
                </Switch>
              </main>
            </Col>
            <Col>
              <img
                src={cart}
                height="75px"
                width="75px"
                alt="Logo"
                alt="cart"
              />
              <img src={services} height="75px" width="75px" alt="services" />
              <img src={aboutus} height="75px" width="75px" alt="aboutus" />
            </Col>
          </Row>
        </Header>
      </Container>
    </>
  );
};

export default connect(Root);
const Header = styled.header`
  background-color: Black;
  padding: 1em;
  h1 {
    color: purple;
  }
`;
