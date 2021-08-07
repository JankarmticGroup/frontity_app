//create posts

import React from "react";
import { connect } from "frontity";

const Post = ({ state }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  console.log(data);
  console.log(post);
  const featuredImage = post.content.rendered.split("<"); //[19].split("img")

  console.log(featuredImage);
  var mainPick = featuredImage[19].split("img");
  console.log(JSON.stringify(mainPick));
  const x = JSON.stringify(mainPick);
  console.log(mainPick);
  const lngth = x.length;
  const rmv = lngth - 3;
  mainPick = mainPick.slice(0, rmv);
  console.log(x.length);
  console.log(lngth);
  console.log(rmv);
  console.log(mainPick);

  return (
    <div>
      <h2>{post.title.rendered}</h2>
      <h2>{mainPick}</h2>

      <img />
    </div>
  );
};

export default connect(Post);
