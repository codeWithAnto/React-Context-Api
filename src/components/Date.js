import React, { useState, useEffect } from 'react';
import { currentDate } from '../utils/currentDate'
import Time from './time';

const DisplayDate = () => {
    const styles = {
        left: {
            position: 'absolute',
            left: 10,
        }, right: {
            position: 'absolute',
            right: 10
        }
    }

    const [ date, setDate ] = useState(null);
    const [day, setDay] = useState(null)

    useEffect(()=> {
        let cur_date = currentDate()
        setDate(cur_date.dd)
        setDay(`${cur_date.mm}`)
    }, [])
    return (
        <div style={styles.container}>
            <div style={styles.left}>
                <h1 style={{display: 'inline', paddingRight: 4, color: '#696969'}}>{date || ''}</h1>
                <span style={{color: '#808080'}}>{day}</span>
            </div>
            <div style={styles.right}>
                <Time />
            </div>
        </div>
    )
}

export default DisplayDate;