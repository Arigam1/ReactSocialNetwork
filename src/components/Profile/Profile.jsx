import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './Profileinfo/ProfileInfo';


const Profile = () => {
    return (
      <div>
        <ProfileInfo/>
        <MyPostsContainer/>
      </div>
    )
}

export default Profile;