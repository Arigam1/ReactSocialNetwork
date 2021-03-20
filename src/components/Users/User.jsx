import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/1.jpg";
import { NavLink } from "react-router-dom";
import s from '../common/Paginator/Paginator.module.css'


let User = ({ user, followingInProgress, unfollow, follow }) => {
  return <div className={styles.users}>
    <span>
      <div>
        <NavLink to={"/profile/" + user.id}>
          <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} />
        </NavLink>
      </div>
      <span>
        <span>
          <div>Nickname: {user.name}</div>
          <div>Status: {user.status}</div>
        </span>
        <span>
          <div>Other information...</div>
        </span>
      </span>
      <div className={styles.follow}>
        {user.followed ? (
          <button className={s.justBtn} disabled={followingInProgress.some((id) => id === user.id)} onClick={() => { unfollow(user.id); }}>
            unfollow
          </button>)
          : (<button className={s.justBtn} disabled={followingInProgress.some((id) => id === user.id)} onClick={() => { follow(user.id); }}>
            follow
          </button>)}
      </div>
    </span>
  </div>
}


export default User;