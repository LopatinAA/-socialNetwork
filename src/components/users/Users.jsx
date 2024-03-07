import React from "react";
import styles from './Users.module.css'
import axios from "axios";

export const Users = (props) => {

    // axios.get('https://social-network.samuraijs.com/api/1.0/users').then( response => {
    //     props.setUsers(response.data.items);
    // })

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then( response => {
        props.setUsers(response.data.items);
    })
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
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        {/* <div>{user.location.country}</div>
                        <div>{user.location.city}</div> */}
                    </span>
                </span>
            </div>)}
        </div>
    )
}