const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-POST-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

export const dialogsPage = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageBody
            }
            state.messageData.push(newMessage)
            state.newMessageBody = ''
            return state
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