import styles from './styles.module.css'; 
import data from './topData.js';


const Top = () => (
    <>
        <h3>Trending Topics</h3>
        <div className={`${styles.container}`}>
            <div className={`${styles.titleContainer} ${styles.flex} ${styles.title}`}>
                <div className={`${styles.title} ${styles.cell}`}>Title</div>
                <div className={`${styles.title} ${styles.cell}`}>Shrink</div>
                <div className={`${styles.title} ${styles.cell}`}>View</div>
            </div>
            <div className={`${styles.cellContainer}`}>
                {data.map(eachData => {
                    return(
                        <div key={eachData[0]} className={`${styles.flex} ${styles.topicsRow}`}>
                            <div className={`${styles.cell} ${styles.topics}`}>{eachData[0]}</div>
                            <div className={`${styles.cell} ${styles.topics}`}>{eachData[1]}</div>
                            <div className={`${styles.cell} ${styles.topics}`}>{eachData[2]}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
);

export default Top;