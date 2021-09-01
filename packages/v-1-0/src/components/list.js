//create list of available data

import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";

const List = ({ state }) => {
  const data = state.source.get(state.router.link);
  console.log(data.items);
  console.log(data);

  return <div></div>;
};

export default connect(List);
