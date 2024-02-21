import React from "react";
import { updateNewPostActionCreator, addPostActionCreator } from "../../../redux/profileReducer";
import { MyPosts } from "./MyPosts";

export const MyPostsContainer = (props) => {
  const onPostChange = (text) => {
    props.store.dispatch(updateNewPostActionCreator(text))
  }

  const addPost = () => {
    props.store.dispatch(addPostActionCreator())
  }
  return (
    <MyPosts 
      updateNewPostActionCreator={onPostChange} 
      addPostActionCreator={addPost}
      post={props.store.profilePage.postData}
      value={props.store.profilePage.newPostText}
    />
  )
}