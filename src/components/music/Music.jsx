import styles from './Music.module.css'

const data1 = [
    { name: 'Контроль региональных проектов', section: 'Подраздел 1', plan: 0, fact: 0 },
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
const data3 = [
    { plan: 0, fact: 0 },
    { plan: 0, fact: 0 },
    { plan: 0, fact: 0 },
    { plan: 0, fact: 0 },
    { plan: 0, fact: 0 },
    { plan: 0, fact: 0 },
    { plan: 0, fact: 0 },
    { plan: 0, fact: 0 },
    { plan: 0, fact: 0 },
    { plan: 0, fact: 0 },
    { plan: 0, fact: 0 },
]
const renderSection = (data) => {
    return (<div className={styles.shapeSection}>
        <div className={styles.nameSection}>
            <div className={styles.nameStyle}>«{data.name}»</div>
            <div className={styles.grayStyle}>{data.section}</div>
        </div>
    </div>)
}
const renderSection2 = (data) => {
    return (<div className={styles.shapeSection}>
        <div className={styles.valueSection}>
            <div className={styles.value}>План</div>
            <div className={styles.value}>{data.plan}</div>
            <div className={styles.value}>Факт</div>
            <div className={styles.value}>{data.fact}</div>
        </div>
    </div>)
}
console.time('method1')

export const Music = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.container1}>
                <div className={styles.nameStyle}>«Контроль региональных проектов»</div>
                <div className={styles.grayStyle}>Раздел 1</div>
            </div>
            <div className={styles.container2}>
                {data1.map((e) => renderSection(e))}
            </div>
            <div className={styles.container3}>
                {data2.map((e) => renderSection(e))}
            </div>
            <div className={styles.container4}>
                {data3.map((e) => renderSection2(e))}
            </div>
        </div>
    )
}

console.timeEnd('method1')