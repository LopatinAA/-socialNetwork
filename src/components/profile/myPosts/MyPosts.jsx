import React from "react";
import styles from './MyPosts.module.css'
import { Post } from "./post/Post";

export const MyPosts = () => {
    return (
        <div>my posts
          <div>new posts
           <div>
           <textarea></textarea>
            <button>click</button>
            <Post message='hi, how are you?' likeCounts='15'/>
            <Post message='it`s my first post' likeCounts='123'/>
           </div>
          </div>
        </div>
    )
} 