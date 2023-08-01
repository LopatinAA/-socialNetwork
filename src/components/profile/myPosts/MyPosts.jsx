import React from "react";
import { Post } from "./post/Post";
import styles from './MyPosts.module.css'

export const MyPosts = () => {

  const postData = [
    {id: 1, message:'hi, how are you?', likeCounts: 15},
    {id: 2, message:'it`s my first post', likeCounts: 123},
  ]

  return (
    <div className={styles.postsBlock}>
      <h3>my posts</h3>
      <div>new posts
        <div>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>click</button>
          </div>
          <div className={styles.posts}>
            {postData.map((el) => (<Post message={el.message} likeCounts={el.likeCounts}/>))}
          </div>
        </div>
      </div>
    </div>
  )
} 