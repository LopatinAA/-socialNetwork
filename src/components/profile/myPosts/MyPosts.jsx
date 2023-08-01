import React from "react";
import { Post } from "./post/Post";
import styles from './MyPosts.module.css'

export const MyPosts = () => {
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
            <Post message='hi, how are you?' likeCounts='15' />
            <Post message='it`s my first post' likeCounts='123' />
          </div>
        </div>
      </div>
    </div>
  )
} 