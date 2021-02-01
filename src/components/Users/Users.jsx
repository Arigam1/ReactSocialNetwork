import React from 'react';
import styles from './Users.module.css';

let Users = (props) => { 
    if  (props.users.length === 0 ) {
        props.setUsers ([
            {   id: 1, 
                photoUrl: 'https://i.pinimg.com/originals/67/2e/80/672e80d4a4a54fe7bc4a1bdb51286531.jpg', 
                followed: false,
                fullName: 'Dmitry', 
                status: 'I am a boss', 
                location: { city: 'Minsk', country: 'Belarus' } 
            },
            {   id: 2, 
                photoUrl: 'https://i.pinimg.com/originals/67/2e/80/672e80d4a4a54fe7bc4a1bdb51286531.jpg',
                followed: false, 
                fullName: 'Maksy', 
                status: 'ssssss', 
                location: { city: 'Astrahan', country: 'Russia' } 
            },
            {   id: 3, 
                photoUrl: 'https://i.pinimg.com/originals/67/2e/80/672e80d4a4a54fe7bc4a1bdb51286531.jpg', 
                followed: false,
                fullName: 'Misha', 
                status: 'Like u', 
                location: { city: 'Kiev', country: 'Ukraine' } 
            },
        ])
    }


    return <div>
        {
        props.users.map(u =><div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className = {styles.userPhoto}/>
                </div>
                <div>
                    {u.followed 
                        ? <button onClick={ () => {
                            props.unfollow(u.id)}}> unfollow</button> 
                        : <button onClick={ () => {
                            props.follow(u.id)}}>follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
        </div>)
    }</div>
}

export default Users;