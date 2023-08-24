import React from "react";
import { Post } from "./post/Post";
import styles from './MyPosts.module.css'
import { updateNewPostActionCreator, addPostActionCreator } from "../../../redux/profileReducer";

export const MyPosts = (props) => {
  const newPostElement = React.createRef();
  const onPostChange = () => {
    props.dispatch(updateNewPostActionCreator(newPostElement.current.value))
  }
  return (
    <div className={styles.postsBlock}>
      <h3>my posts</h3>
      <div>new posts
        <div>
          <div>
            <textarea 
            onChange={onPostChange}
            placeholder='Share your thoughts'
            ref={newPostElement} 
            value={props.store.profilePage.newPostText}/>
          </div>
          <div>
            <button onClick={() =>{props.dispatch(addPostActionCreator())}}>click</button>
          </div>
          <div className={styles.posts}>
            {props.store.profilePage.postData.map((el) => (<Post message={el.message} likeCounts={el.likeCounts}/>))}
          </div>
        </div>
      </div>
    </div>
  )
}