import React from "react";
import { Post } from "./post/Post";
import styles from './MyPosts.module.css'

export const MyPosts = (props) => {
  const state = props.store.getState();
  const newPostElement = React.createRef();
  const onPostChange = () => {
    props.store.updateNewPostText(newPostElement.current.value)
  }
  return (
    <div className={styles.postsBlock}>
      <h3>my posts</h3>
      <div>new posts
        <div>
          <div>
            <textarea 
            onChange={onPostChange}
            ref={newPostElement} 
            value={state.profilePage.newPostText}/>
          </div>
          <div>
            <button onClick={() =>{props.store.addPost()}}>click</button>
          </div>
          <div className={styles.posts}>
            {state.profilePage.postData.map((el) => (<Post message={el.message} likeCounts={el.likeCounts}/>))}
          </div>
        </div>
      </div>
    </div>
  )
} 