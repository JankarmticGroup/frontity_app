//create list of available data

import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";

const List = ({ state }) => {
  const data = state.source.get(state.router.link);
  console.log(data);
  console.log(state);

  return (
    <div>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id];
        return (
          <Link key={item.id} link={post.link}>
            {post.title.rendered}
            <br />
          </Link>
        );
      })}
    </div>
  );
};

export default connect(List);
