import React from "react";
import { Post } from "./post/Post";
import styles from './MyPosts.module.css'
// import { updateNewPostActionCreator, addPostActionCreator } from "../../../redux/profileReducer";

export const MyPosts = (props) => {
  return (
    <div className={styles.postsBlock}>
      <h3>my posts</h3>
      <div>new posts
        <div>
          <div>
            <textarea 
            onChange={(e) => {props.updateNewPostActionCreator(e.target.value)}}
            placeholder='Share your thoughts'
            value={props.profilePage.newpostText}/>
          </div>
          <div>
            <button onClick={() =>{props.addPostActionCreator()}}>click</button>
          </div>
          <div className={styles.posts}>
            {props.profilePage.postData.map((el) => (<Post message={el.message} likeCounts={el.likeCounts}/>))}
          </div>
        </div>
      </div>
    </div>
  )
}