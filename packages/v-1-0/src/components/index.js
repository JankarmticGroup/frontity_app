import React from "react";
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
          }
        `}
      />

      <Header>
        <StyledLogo>
          <img
            src={logo}
            margin-left="0"
            height="75px"
            width="75px"
            alt="Logo"
          />
        </StyledLogo>
        <img src={cart} height="75px" width="75px" alt="Logo" alt="cart" />
        <img src={services} height="75px" width="75px" alt="services" />
        <img src={aboutus} height="75px" width="75px" alt="aboutus" />
        <main>
          <Switch>
            <List when={data.isArchive} />
            <Post when={data.isPost} />
            <Page when={data.isPage} />
          </Switch>
        </main>
      </Header>
    </>
  );
};

export default connect(Root);
const Header = styled.header`
  background-color: Black;
  //border-width: 0 0 0px 0;

  width: 100%;
  text-align: center;
  max-width: 900px;
  padding: 1em;
  h1 {
    color: purple;
  }
`;

const Main = styled.main`
  max-width: 800px;
  padding: 1em;
  margin: auto;

  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`;
const StyledLogo = styled.logo`
  margin-left: 0;!important
`;
