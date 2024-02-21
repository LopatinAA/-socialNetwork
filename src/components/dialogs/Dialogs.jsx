import React from 'react';
import styles from './Dialogs.module.css'
import { DialogItem } from './dialogItem/DialogItem';
import { Message } from './message/Message';



export const Dialogs = (props) => { 
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {props.dialogData.map((e) => (<DialogItem name={e.name} id={e.id} />))}
            </div>
            <div className={styles.messagesContainer}>
                <div className={styles.messages}>
                    {props.messageData.map((e) => (<Message message={e.message} id={e.id} />))}
                </div>
                <div>
                    <textarea 
                    onChange={(e) => props.updateNewMessageActionCreator(e.target.value)}
                    placeholder='Enter your message'
                    value={props.newMessageBody}></textarea>
                    <button onClick={() => {props.addMessageActionCreator()}}>send</button>
                </div>
            </div>
        </div>
    )
}