import { NavLink } from 'react-router-dom'
import styles from './Dialogs.module.css'

const DialogItem = (props) => {
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}

export const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name='Dimysh' id='1'/>
                <DialogItem name='Andrey' id='2'/>
                <DialogItem name='Sasha' id='3'/>
                <DialogItem name='Sveta' id='4'/>
                <DialogItem name='Viktor' id='5'/>
            </div>
            <div className={styles.messages}>
                <Message message='hi'/>
                <Message message='yo'/>
                <Message message='by'/>
                <Message message='by'/>
                <Message message='by'/>
            </div>
        </div>
    )
}