import React from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

class CommentSection extends React.Component {
  constructor(props){
    super(props); 
      this.state = {
        comments: props.comments
      }
  }

  render(){
    return(
      <div>
        {this.state.comments.map((iComments, index) => <Comment key={index} comment={iComments} />)} 
        <CommentForm/>
      </div>
    );
  }
}

export default CommentSection;