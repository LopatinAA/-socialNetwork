import styles from './News.module.css'

const data1 = [
    { name: '', section: 'Подраздел 1', plan: 0, fact: 0 },
    { name: '', section: 'Подраздел 2', plan: 0, fact: 0 },
    { name: '', section: 'Подраздел 3', plan: 0, fact: 0 },
    { name: '', section: 'Подраздел 4', plan: 0, fact: 0 },
    { name: '', section: 'Подраздел 5', plan: 0, fact: 0 },
    { name: '', section: 'Подраздел 6', plan: 0, fact: 0 },
    { name: '', section: 'Подраздел 7', plan: 0, fact: 0 },
]
const data2 = [
    { name: '', section: 'Раздел 2', plan: 0, fact: 0 },
    { name: '', section: 'Раздел 3', plan: 0, fact: 0 },
    { name: '', section: 'Раздел 4', plan: 0, fact: 0 },
    { name: '', section: 'Раздел 5', plan: 0, fact: 0 },
]

// export const News = (props) => {
//     return (
        // <div className={styles.container}>
        //     <div className={styles.container1}>1111</div>
        //     <div className={styles.container2}>
        //         {data1.map((e) => renderSection(e))}
        //     </div>
        //     <div className={styles.container3}>
        //         {data2.map((e) => renderSection(e))}
        //     </div>
        // </div>
//     )
// }

export const News = (props) => {
    return (
        <div className={styles.box}>
            <div className={styles.item}>Lorem.</div>
            <div className={styles.item}>Lorem, ipsum.</div>
            <div className={styles.item}>Lorem, ipsum dolor.</div>
            <div className={styles.item}>Lorem ipsum dolor sit amet.</div>
            <div className={styles.item}>Lorem.</div>
            <div className={styles.item}>Lorem, ipsum.</div>
            <div className={styles.item}>Lorem, ipsum dolor.</div>
            <div className={styles.item}>Lorem ipsum dolor sit amet.</div>
            <div className={styles.item}>Lorem.</div>
            <div className={styles.item}>Lorem, ipsum.</div>
            <div className={styles.item}>Lorem, ipsum dolor.</div>
            <div className={styles.item}>Lorem ipsum dolor sit amet.</div>
            <div className={styles.item}>Lorem.</div>
            <div className={styles.item}>Lorem, ipsum.</div>
            <div className={styles.item}>Lorem, ipsum dolor.</div>
            <div className={styles.item}>Lorem ipsum dolor sit amet.</div>
        </div>
    )
}

const renderSection = (data) => {

    return (<div className={styles.shapeSection}>
        <div className={styles.nameSection}>
            <div>{data.nameSection}</div>
            <div>{data.section}</div>
        </div>
        <div className={styles.valueSection}>
            <div>{data.plan}</div>
            <div>{data.fact}</div>
        </div>
    </div>)
}