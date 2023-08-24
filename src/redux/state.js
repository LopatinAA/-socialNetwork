import {profilePage} from './profileReducer'
import {dialogsPage} from './dialogReducer'

export const store = {
  _state: {
    dialogPage: {
      dialogData: [
        { id: 1, name: 'Dimysh' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Sveta' },
        { id: 5, name: 'Viktor' },
      ],
      messageData: [
        { id: 1, message: 'hi123' },
        { id: 2, message: 'yo' },
        { id: 3, message: 'by' },
      ],
      newMessageBody: "",
    },
    profilePage: {
      postData: [
        { id: 1, message: 'hi, how are you?', likeCounts: 125 },
        { id: 2, message: 'it`s my first post', likeCounts: 123 },
        { id: 3, message: 'it`s my first post', likeCounts: 123 },
      ],
      newPostText: "",
    },
  },
  _callSubscriber() {
    console.log('no subscribers')
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) { // {type: 'ADD-POST'} action - объект у которого как минимум есть одно свойство type
    this._state.profilePage = profilePage(this._state.profilePage, action)
    this._state.dialogPage = dialogsPage(this._state.dialogPage, action)
    this._callSubscriber(this._state)
  },
  _addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likeCounts: 0,
    }
    this._state.profilePage.postData.push(newPost)
    this._callSubscriber(this._state)
  },
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText
    this._callSubscriber(this._state)
  },
  _getDialogData() {
    return this._state.dialogPage.dialogData
  },
  _getMessageData() {
    return this._state.dialogPage.messageData
  },
}

window.state = store;


