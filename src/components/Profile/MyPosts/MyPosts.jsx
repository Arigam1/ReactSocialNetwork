import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElements = props.posts.map (p => <Post message={p.message} likesCount= {p.likesCount}/>)
    let newPostElement = React.createRef();
    
    let onAddPost = () => {
      props.addPost();
    }

    let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text)
    }
    return (
        <div className={s.postsBlock}>
          <h3>My post</h3>
          <div>
            <div>
              <textarea onChange={onPostChange}
                ref={newPostElement}
                value={props.newPostText}></textarea>
            </div>
            <div>
              <button onClick={onAddPost}>Add</button>
            </div>
          </div>
          <div className={s.posts}>
            {postElements}
          </div>
        </div>
    )
}

export default MyPosts;