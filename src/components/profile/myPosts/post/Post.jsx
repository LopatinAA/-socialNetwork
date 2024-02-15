import React from "react";
import styles from './Post.module.css'

export const Post = (props) => {
  return (
    <div className={styles.item}>
      <img src='https://avatars.mds.yandex.net/i?id=6c854abc6588200fccc86aff11e66a86997effb4-9053276-images-thumbs&n=13' alt='img'/>
      {props.message}
      <div className={styles.likeBar}>
        <span>like: {props.likeCounts}</span>
        <img src='https://cdn1.ozone.ru/s3/multimedia-a/6329232574.jpg' alt='like'/>
      </div>
    </div>
  )
} 