import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
  let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)


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
}

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder='Enter your post' name='newPostText' component={Textarea} validate={[required, maxLength10]} />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  )
};

const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNew PostForm' })(AddNewPostForm);


export default MyPosts;