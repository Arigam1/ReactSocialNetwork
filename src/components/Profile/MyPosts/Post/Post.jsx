import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
      <div className={s.item}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Grapefruit%2C_half.jpg" />
        {props.message}
        <div>
          <span>like</span>{props.likesCount}
        </div>
      </div>
    )
}

export default Post;