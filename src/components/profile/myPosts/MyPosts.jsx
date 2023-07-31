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
            <Post/>
           </div>
          </div>
        </div>
    )
} 