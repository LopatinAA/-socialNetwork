import React from 'react';
import styles from './Dialogs.module.css'
import { DialogItem } from './dialogItem/DialogItem';
import { Message } from './message/Message';

export const Dialogs = (props) => {
    const newMessageElement = React.createRef();
    const addMessage = () => {
        alert(newMessageElement.current.value)
    }
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {props.store.getState().dialogPage.dialogData.map((e) => (<DialogItem name={e.name} id={e.id} />))}
            </div>
            <div className={styles.messagesContainer}>
                <div className={styles.messages}>
                    {props.store.getState().dialogPage.messageData.map((e) => (<Message message={e.message} id={e.id} />))}
                </div>
                <div>
                    <textarea ref={newMessageElement}></textarea>
                    <button onClick={addMessage}>send</button>
                </div>
            </div>
        </div>
    )
}