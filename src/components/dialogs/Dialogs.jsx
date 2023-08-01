import { NavLink } from 'react-router-dom'
import styles from './Dialogs.module.css'

const DialogItem = (props) => {
    return (
        <div >
            <NavLink
                to={'/dialogs/'}
                className={styles.dialog + ' ' + styles.active}>
                {props.name}
            </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}

const dialogsData = [
    { id: 1, name: 'Dimysh' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Sasha' },
    { id: 4, name: 'Sveta' },
    { id: 5, name: 'Viktor' },
];

const messagesData = [
    { id: 1, message: 'hi' },
    { id: 2, message: 'yo' },
    { id: 3, message: 'by' },
]

export const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsData.map((e) => (<DialogItem name={e.name} id={e.id} />))}
            </div>
            <div className={styles.messages}>
                {messagesData.map((e) => (<Message message={e.message} id={e.id} />))}
            </div>
        </div>
    )
}