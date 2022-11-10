import React, { useState } from "react"

export const Example=() =>{
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const arr = ["リンゴ","パイナップル","ペン"];

    const changeSix = () => {
        const num = 6
        setCount(num)
    }

    const changeFive = () => {
        const num = 5
        setCount(num)
        const test = undefined
        if (test !== undefined){
            setCount(test)
        }
   
    }

    const errorMap = () => {
        const list = undefined
        const newList = list.map(x => x * 2);
    }

    const initCount = () => {
        setCount(0);
    }


    return (
        <div>
            { 
            arr.map((fruit,index)=> <li key={index}>{index}{fruit}</li>)
            
            }
            {arr.map((fruit,index)=> <div key={index}>{index}{fruit}</div>)}
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                クリックミー
            </button>
            <button onClick={() => setCount(70)}>
                クリック70
            </button>
            <button onClick={changeSix}>
                クリック6
            </button>
            <button onClick={changeFive}>
                クリック5
            </button>
            <button onClick={errorMap}>
                クリックerrorMap
            </button>
            <button onClick={initCount}>
                クリック初期化
            </button>
        </div>
    );
};