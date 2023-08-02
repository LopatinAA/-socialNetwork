import styles from './Dialogs.module.css'
import { DialogItem } from './dialogItem/DialogItem';
import { Message } from './message/Message';

export const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {props.dialogsData.map((e) => (<DialogItem name={e.name} id={e.id} />))}
            </div>
            <div className={styles.messages}>
                {props.messagesData.map((e) => (<Message message={e.message} id={e.id} />))}
            </div>
        </div>
    )
}