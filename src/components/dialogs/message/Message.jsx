import styles from '../Dialogs.module.css'

export const Message = (props) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}

