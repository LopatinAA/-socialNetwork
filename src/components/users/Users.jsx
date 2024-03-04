import React from "react";
import styles from './Users.module.css'

export const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, followed: false,  photoUrl: 'https://avatars.mds.yandex.net/i?id=6c854abc6588200fccc86aff11e66a86997effb4-9053276-images-thumbs&n=13', fullName: 'Dmitry', status: 'im a boss', location: { city: 'minsk', country: 'Belarus' } },
            { id: 2, followed: true,  photoUrl: 'https://avatars.mds.yandex.net/i?id=6c854abc6588200fccc86aff11e66a86997effb4-9053276-images-thumbs&n=13', fullName: 'Oleg', status: 'im a', location: { city: 'minsk', country: 'Belarus' } },
            { id: 3, followed: true,  photoUrl: 'https://avatars.mds.yandex.net/i?id=6c854abc6588200fccc86aff11e66a86997effb4-9053276-images-thumbs&n=13', fullName: 'Anton', status: 'im', location: { city: 'minsk', country: 'Belarus' } },
            { id: 4, followed: false,  photoUrl: 'https://avatars.mds.yandex.net/i?id=6c854abc6588200fccc86aff11e66a86997effb4-9053276-images-thumbs&n=13', fullName: 'Mark', status: '', location: { city: 'minsk', country: 'Belarus' } },
    
        ])
    } 

    return (
        <div>
            {props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photoUrl} alt="" className={styles.userPhoto}/>
                    </div>
                    <div>
                        {user.followed ? 
                            <button onClick={() => {props.unfollow(user.id)}}>
                                unfollow
                            </button> : 
                            <button onClick={() => {props.follow(user.id)}}>
                                follow
                            </button>} 
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}