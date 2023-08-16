import React from "react";
import { Post } from "./post/Post";
import styles from './MyPosts.module.css'

export const MyPosts = (props) => {
  const newPostElement = React.createRef();
  const addPost = () => {
    props.addPost();
  }
  const onPostChange = () => {
    props.updateNewPostText(newPostElement.current.value)
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
            value={props.profilePage.newPostText}/>
          </div>
          <div>
            <button onClick={() =>{addPost()}}>click</button>
          </div>
          <div className={styles.posts}>
            {props.profilePage.postData.map((el) => (<Post message={el.message} likeCounts={el.likeCounts}/>))}
          </div>
        </div>
      </div>
    </div>
  )
} 