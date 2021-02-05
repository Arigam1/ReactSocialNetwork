import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={s.avatar}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/68/NVIDIA_SHIELD_TV_2017ver_console.jpg" />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        ava+description
      </div>
    </div>
  );
};

export default ProfileInfo;
