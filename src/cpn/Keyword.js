import data from './keywordData';
import styles from './stylesKeyword.module.css'; 
import { useState, useRef } from 'react';


const Keyword = () => {
    const [thisData, useData] = useState(data);
    const [selectedData, setSelectedData] = useState(['', 0, ['']]);
    const buttonRef = useRef(null);

    const expanding = (element) => {
        const height = element.getBoundingClientRect().height;
        return height;
    }

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const clickFunction = async (ind) => {
        if(ind=='No_tag'){
            setSelectedData(['', 0, ['']]);
            buttonRef.current.className = `${styles.topicList} ${styles.hide}`;
        } else {
            if(selectedData[0]){
                buttonRef.current.className = `${styles.topicList} ${styles.hide}`;
                await delay(500);
                setSelectedData(thisData[ind]);
                buttonRef.current.className = `${styles.show}`;
            } else{
                setSelectedData(thisData[ind]);
                buttonRef.current.className = `${styles.show}`;
            }   
        }
    }

    


    
    return(
        <>
            <h3>Trending Keyword</h3>
            <div  className={`${styles.keywordContainer}`} >
                <div className={`${styles.toggleList}`}>
                    <button  onClick={()=>clickFunction('No_tag')}  className={`${styles.button}`}>No_tag</button>
                    {
                        thisData.map((eachData, ind) => {
                            return (
                                <button  onClick={()=>clickFunction(ind)} key={ind} className={`${styles.button}`} >{eachData[0]}</button>
                            )
                        })
                    }
                </div>
                <div ref={buttonRef} className={`${styles.topicList} ${styles.hide}`}>
                    {selectedData[2].map((eachTitle, ind) => {
                        return <div className={`${styles.topic}`} key={ind}>{eachTitle}</div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Keyword;