import React from "react";
import Stories from "./Stories";
// import Create from './Create'
import Showpost from "./Showpost";

const Posts = () => {
  return (
    <div className="posts">
      <Stories />
      {/* <Create/> */}
      <Showpost />
    </div>
  );
};

export default Posts;
