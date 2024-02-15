import { NavLink } from 'react-router-dom'
import styles from '../Dialogs.module.css'

export const DialogItem = (props) => {
    return (
        <div >
            <NavLink
                to={`/dialogs/${props.id}`}
                className={styles.dialog + ' ' + styles.active}>
                {props.name}
            </NavLink>
        </div>
    )
}

