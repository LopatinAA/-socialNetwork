import React from "react";
import { updateNewPostActionCreator, addPostActionCreator } from "../../../redux/profileReducer";
import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";

// export const MyPostsContainer = (props) => {
//   const onPostChange = (text) => {
//     props.store.dispatch(updateNewPostActionCreator(text))
//   }

//   const addPost = () => {
//     props.store.dispatch(addPostActionCreator())
//   }
//   return (
//     <MyPosts 
//       updateNewPostActionCreator={onPostChange} 
//       addPostActionCreator={addPost}
//       post={props.store.profilePage.postData}
//       value={props.store.profilePage.newPostText}
//     />
//   )
// }

const mapStateToProps = (state) =>{
  return {
    profilePage: state.profilePage
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    updateNewPostActionCreator: (text) => {
      dispatch(updateNewPostActionCreator(text))
    },
    addPostActionCreator: () => {
      dispatch(addPostActionCreator())
    }
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);