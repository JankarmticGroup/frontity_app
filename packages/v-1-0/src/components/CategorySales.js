import React, { useEffect } from "react";
import { connect } from "frontity";

// In a React component that uses "connect":
const CategorySales = ({ state, actions }) => {
  // 1. fetch data related to a path
  // With this useEffect we make the call to fetch
  // only the first time the component is rendered.
  // When the data is fetched, the state is updated with the new data
  // so the component is re-rendered and "data" will get proper content

  useEffect(() => {
    actions.source.fetch("/category/sales/");
  }, []);

  // 2. get data from frontity state
  const data = state.source.get("/category/sales/");

  // 3. get entities from frontity state
  if (data.isCategory) {
    // the category entity
    const category = state.source.category[data.id];

    // posts from that category
    const posts = data.items.map(({ type, id }) => state.source[type][id]);

    // 4. render!
    return <>{<h1>{posts[0].id}</h1>}</>;
  }

  return null;
};

export default connect(CategorySales);
