import React from "react"
import Posts from "./Posts"

const PostContainer = (props) => {
  // console.log(this.props)
  return(
    <div>
      {props.post.map(iPosts => <Posts key={iPosts.username} posts={iPosts}/>)}
    </div>
  );
};

export default PostContainer;