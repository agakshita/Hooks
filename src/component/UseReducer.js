import React from 'react'
import { useState } from 'react';
import './style.css';
import { useReducer } from 'react';

const reducer = (state, action) => {
    if (action.type === "INCR") {
        state += 1;
    }
    if (state > 0 && action.type === "DECR") {
        state -= 1;
    }
    return state;
};

const UseReducer = () => {

    // const [myNumber, setMyNumber] = useState(0);
    const initialData = 10;
    const [state, dispatchMethod] = useReducer(reducer, initialData);

    return (
        <>
            <div className="center_div">
                <p>{state}</p>
                <div className="button2" onClick={() => dispatchMethod({ type: "INCR" })}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div className="button2" onClick={() => dispatchMethod({ type: "DECR" })}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DSCR
                </div>
            </div>
        </>
    );
};

export default UseReducer;
