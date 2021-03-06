// show pages
import React from "react";
import { connect } from "frontity";

const Page = ({ state }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];

  return <div>{page.title.rendered}</div>;
};

export default connect(Page);
