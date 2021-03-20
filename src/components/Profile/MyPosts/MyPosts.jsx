import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import style from "../../common/Paginator/Paginator.module.css";

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder='Enter your post' name='newPostText' component={Textarea} validate={[required, maxLength10]} />
      </div>
      <div>
        <button className={style.justBtn}>Add</button>
      </div>
    </form>
  )
};

let AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);



const MyPosts = React.memo(props => {
  let postElements =
    [...props.posts]      // immutability!!! очень важно в pure function
      .reverse()
      .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)


  let onAddPost = (value) => {
    props.addPost(value.newPostText);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <AddNewPostFormRedux onSubmit={onAddPost} />
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
})


export default MyPosts;