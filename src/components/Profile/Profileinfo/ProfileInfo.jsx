import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import Avatar1 from "../../../assets/images/Avatar.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (

    <div>
      <div>
        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/6/68/NVIDIA_SHIELD_TV_2017ver_console.jpg" /> */}
      </div>
      <div className={s.descriptionBlock}>
        <div className={s.avatar}>
          <img src={props.profile.photos.large != null ? props.profile.photos.large : Avatar1} />
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        </div>
        <div>{props.profile.aboutMe}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
