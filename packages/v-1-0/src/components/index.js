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
import Jnav from "./Jnav";

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Global
        styles={css`
          * {
          }
          html {
          }
          container {
          }
          jcons {
            padding-left: 80%;
          }
          heads {
            display: flex;
          }
        `}
      />

      <Container>
        <Jnav />
        <Row className="heads">
          <Col>
            <img
              className="logo"
              src={logo}
              height="75px"
              width="75px"
              alt="Logo"
            />
          </Col>
          <Col className="jcons">
            <img src={cart} height="75px" width="75px" alt="Logo" alt="cart" />
            <img src={services} height="75px" width="75px" alt="services" />
            <img src={aboutus} height="75px" width="75px" alt="aboutus" />
          </Col>
        </Row>

        <main>
          <Switch>
            <List when={data.isArchive} />
            <Post when={data.isPost} />
            <Page when={data.isPage} />
          </Switch>
        </main>
      </Container>
    </>
  );
};

export default connect(Root);
