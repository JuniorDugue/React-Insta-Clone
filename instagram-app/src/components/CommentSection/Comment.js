import React from "react";
import PropTypes from "prop-types"

const Comment = props => {
  return(
    <div>
      <p>{props.comment.text}</p>
      <p>{props.comment.username}</p>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes({
    text: PropTypes.string,
    username: PropTypes.string
  })
}

export default Comment;