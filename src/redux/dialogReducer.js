const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-POST-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state}
            stateCopy.newMessageBody = action.body
            return stateCopy
        }
            
        case SEND_MESSAGE: {
            let newMessage = {
                id: 4,
                message: state.newMessageBody
            }
            let stateCopy = {...state}
            stateCopy.messageData = [...state.messageData]
            stateCopy.messageData.push(newMessage)
            stateCopy.newMessageBody = ''
            return stateCopy
        }
            
        default:
            return state
    }
}

export const addMessageActionCreator = () => {
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