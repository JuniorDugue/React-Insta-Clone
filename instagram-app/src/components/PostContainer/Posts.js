import React from "react"
import PostsName from "./PostsName";
import PostsImage from "./PostsImage"

const Posts = (props) => {
  return(
    <div>
      <PostsName username={props.posts.username} />
      <PostsImage thumbnailUrl={props.posts.thumbnailUrl}/>
    </div>
  )
}

export default Posts;