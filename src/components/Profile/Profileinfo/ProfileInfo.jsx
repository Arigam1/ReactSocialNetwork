import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import Avatar1 from "../../../assets/images/Avatar.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
      </div>
      <div className={s.descriptionBlock}>
        <div className={s.avatar}>
          <img src={profile.photos.large != null ? profile.photos.large : Avatar1} />
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
        <div>{profile.aboutMe}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
