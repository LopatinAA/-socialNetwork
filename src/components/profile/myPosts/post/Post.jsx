import React from "react";
import styles from './Post.module.css'

export const Post = () => {
  return (
    <div className={styles.item}>
      <img src='https://avatars.mds.yandex.net/i?id=6c854abc6588200fccc86aff11e66a86997effb4-9053276-images-thumbs&n=13' />
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  )
} 