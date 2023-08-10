import React from "react";
import { Post } from "./post/Post";
import styles from './MyPosts.module.css'

export const MyPosts = (props) => {
  const newPostElement = React.createRef();
  const addPost = () => {
    alert(newPostElement.current.value);
  }
  return (
    <div className={styles.postsBlock}>
      <h3>my posts</h3>
      <div>new posts
        <div>
          <div>
            <textarea ref={newPostElement}></textarea>
          </div>
          <div>
            <button onClick={() =>{addPost()}}>click</button>
          </div>
          <div className={styles.posts}>
            {props.postData.map((el) => (<Post message={el.message} likeCounts={el.likeCounts}/>))}
          </div>
        </div>
      </div>
    </div>
  )
} 