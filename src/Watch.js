import "./Watch.css";
import { useState, useEffect } from "react";

function Watch(props) {
    const btnRemoveClickHandler = () => {
        props.onRemoveItem(props.watch);
     }

    const nowLocal = new Date();
    
    //gmtTime.toLocaleTimeString()
    const [now,setNow] = useState(nowLocal);

    function displayClock() {  
        const gmtTime = new Date(nowLocal.getTime() + (nowLocal.getTimezoneOffset()+props.watch.hoursDifference*60) * 60000);      
        setNow(gmtTime);
        console.log(`${now.toLocaleTimeString()}`);
    }
      
     
    useEffect(() => {
        const intervalWatches = setInterval(() => {
            displayClock();
        }, 1000);
    
        return () => {
          clearInterval(intervalWatches);
        };
    }, [now]);

    return (
         <div className="watchItem">
             <div className="wrap wrap-name" >{props.watch.name}</div>
             <div className="wrap wrap-date" >{now.toLocaleTimeString()}</div>
             <div className="wrap wrap-edit" ><button onClick={btnRemoveClickHandler}>удалить</button></div>
         </div>
    )
}

export default Watch;