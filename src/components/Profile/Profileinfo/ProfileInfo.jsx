import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import Avatar1 from "../../../assets/images/Avatar.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataFormReduxForm from "./ProfileDataForm";
import style from "../../common/Paginator/Paginator.module.css";



const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }


  const onSubmit = (formData) => {
    saveProfile(formData).then(
      () => {
        setEditMode(false);
      }
    );
  }
  return (
    <div>
      <div className={s.descriptionBlock}>
        <div className={s.avatar}>
          <img src={profile.photos.large || Avatar1} />
        </div>
        <div className={s.download}>
          {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        </div>
        <div>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
          {editMode
            ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
            : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}
        </div>



      </div>
    </div>
  );
};


const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return <div className={s.profileInfo}>
    <div>
      <b>Full name</b>: {profile.fullName}
    </div>
    <div>
      <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
    </div>
    {profile.lookingForAJob &&
      <div>
        <b>My skills</b>: {profile.lookingForAJobDescription}
      </div>
    }
    <div><b>About me</b>: {profile.aboutMe}</div>
    <div>
      <b>Constacts</b>: {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
      })}</div>
    <div className={s.edit}>
      {isOwner && <div><button className={style.justBtn} onClick={goToEditMode}>edit</button></div>}
    </div>
  </div>
}

const Contact = ({ contactTitle, contactValue }) => {
  return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;
