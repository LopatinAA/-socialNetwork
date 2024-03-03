import React from 'react';
import styles from './Dialogs.module.css'
import { Dialogs } from './Dialogs';
import { DialogItem } from './dialogItem/DialogItem';
import { Message } from './message/Message';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogReducer';
import { connect } from 'react-redux';



// export const DialogsContainer = (props) => {
//     const onMessageChange = (text) => {
//         props.store.dispatch(updateNewMessageActionCreator(text))
//     }
//     const addMessage = () => {
//         props.store.dispatch(addMessageActionCreator())
//     }
//     return (
//         <Dialogs
//             addMessageActionCreator={addMessage}    
//             updateNewMessageActionCreator={onMessageChange}
//             dialogData={props.store.dialogPage.dialogData}
//             messageData={props.store.dialogPage.messageData}
//             newMessageBody={props.store.dialogPage.newMessageBody}
//         /> 
//     )
// }

const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        addMessageActionCreator: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageActionCreator: (text) => {
            dispatch(updateNewMessageActionCreator(text))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToprops) (Dialogs)