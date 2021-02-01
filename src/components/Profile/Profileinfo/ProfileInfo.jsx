import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
      <div>
        <div className={s.avatar}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/68/NVIDIA_SHIELD_TV_2017ver_console.jpg"/>
        </div>
        <div className={s.descriptionBlock}>
          ava+description
        </div>
      </div>
    )
}

export default ProfileInfo;