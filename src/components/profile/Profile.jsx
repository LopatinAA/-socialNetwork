import React from "react";
// import { MyPosts } from "../profile/myPosts/MyPosts";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { MyPostsContainer } from "./myPosts/MyPostsContainer";

export const Profile = (props) => {
  console.log('props in Profile', props);
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
        store={props.store}/>
    </div>
  )
} 