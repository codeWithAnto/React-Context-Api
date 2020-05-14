import React, {useState, useEffect} from 'react';
import { currentTime } from '../utils/currentTime';

const Time = () => {

    const [time, setTime] = useState(null);
    
    useEffect(()=> {
        setInterval(()=> {
            setTime(currentTime())
        }, 1000);
    }, []);
    
    return (
        <h3 style={{color: '#696969'}}>{time}</h3>
    )
}

export default Time;