import React from 'react'
import './style.css'
import { useState } from 'react';

const UseState = () => {

    const initialData = 0;
    const [myNumber, setMyNumber] = useState(initialData);

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
                <div className="button2" onClick={() => myNumber > 0 ? setMyNumber(myNumber - 1) : setMyNumber(0)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DSCR
                </div>
            </div>
        </>
    )
}

export default UseState;
