import React from 'react'
import './style.css'
import { useEffect } from 'react';
import { useState } from 'react';

const UseEffect = () => {

    const initialData = 0;
    const [myNumber, setMyNumber] = useState(initialData);

    useEffect(()=>{
        document.title=`Chats(${myNumber})`
    });

    return (
        <>
            <div className="center_div">
                <p>{myNumber}</p>
                <div className="button2" onClick={() => setMyNumber(myNumber + 1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
            </div>
        </>
    )
}

export default UseEffect;
