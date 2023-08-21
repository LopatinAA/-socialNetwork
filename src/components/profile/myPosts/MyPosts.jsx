import React from "react";
import { Post } from "./post/Post";
import styles from './MyPosts.module.css'

export const MyPosts = (props) => {
  const newPostElement = React.createRef();
  const onPostChange = () => {
    props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: newPostElement.current.value})
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
            value={props.store.profilePage.newPostText}/>
          </div>
          <div>
            <button onClick={() =>{props.dispatch({type: 'ADD-POST'})}}>click</button>
          </div>
          <div className={styles.posts}>
            {props.dispatch({type: 'GET-POST-DATA'}).map((el) => (<Post message={el.message} likeCounts={el.likeCounts}/>))}
          </div>
        </div>
      </div>
    </div>
  )
} 