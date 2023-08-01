import { NavLink } from 'react-router-dom'
import styles from './Dialogs.module.css'

export const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialog + ' ' + styles.active}>
                    <NavLink to='/dialogs/1'>Dimysh</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/2'>Andrey</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/3'>Sasha</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/4'>Sveta</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/5'>Viktor</NavLink>
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>hi</div>
                <div className={styles.message}>yo</div>
                <div className={styles.message}>by</div>
            </div>
        </div>
    )
}