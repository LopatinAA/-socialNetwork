import React from 'react';
import styles from './Dialogs.module.css'
import { DialogItem } from './dialogItem/DialogItem';
import { Message } from './message/Message';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogReducer';



export const Dialogs = (props) => {
    const newMessageElement = React.createRef();
    const onMessageChange = (e) => {
        props.dispatch(updateNewMessageActionCreator(e.target.value))
    }
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {props.store.dialogPage.dialogData.map((e) => (<DialogItem name={e.name} id={e.id} />))}
            </div>
            <div className={styles.messagesContainer}>
                <div className={styles.messages}>
                    {props.store.dialogPage.messageData.map((e) => (<Message message={e.message} id={e.id} />))}
                </div>
                <div>
                    <textarea 
                    onChange={onMessageChange}
                    placeholder='Enter your message'
                    ref={newMessageElement}
                    value={props.store.dialogPage.newMessageBody}></textarea>
                    <button onClick={() => {props.dispatch(addMessageActionCreator())}}>send</button>
                </div>
            </div>
        </div>
    )
}