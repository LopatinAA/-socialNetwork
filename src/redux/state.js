const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const GET_POST_DATA = 'GET-POST-DATA'

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-POST-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

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
  dispatch(action) { // {type: 'ADD-POST'}
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCounts: 0,
      }
      this._state.profilePage.postData.push(newPost)
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    } else if (action.type === GET_POST_DATA) {
      return this._state.profilePage.postData
    } else if (action.type === 'GET-DIALOG-DATA') {
      return this._state.dialogPage.dialogData
    } else if (action.type === 'GET-MESSAGE-DATA') {
      return this._state.dialogPage.messageData
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogPage.newMessageBody = action.body
      this._callSubscriber(this._state)
    } else if (action.type === SEND_MESSAGE) {
      console.log(action.type)
      let newMessage = {
        id: 4,
        message: this._state.dialogPage.newMessageBody
      }
      this._state.dialogPage.messageData.push(newMessage)
      this._callSubscriber(this._state)
    }
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

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}
export const updateNewPostActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  }
}

export const addMessageActionCreator = () => {
  console.log('qdasdqd')
    return {
      type: SEND_MESSAGE
    }
}
export const updateNewMessageActionCreator = (text) => {
    return {
      type: UPDATE_NEW_MESSAGE_BODY, 
      body: text
    }
}

window.state = store;


