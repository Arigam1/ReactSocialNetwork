import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import Avatar1 from "../../../assets/images/Avatar.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  return (
    <div>
      <div>
      </div>
      <div className={s.descriptionBlock}>
        <div className={s.avatar}>
          <img src={profile.photos.large || Avatar1} />
          {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
        <div>{profile.aboutMe}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
