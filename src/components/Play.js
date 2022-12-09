import axios from "axios";
import React, { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Components.module.css";
import { Header } from "./Header";

export const Play = () => {
    const location = useLocation()
    const selectCourse = (location.state || {}).course
    const [ course, setCourse ] = useState(selectCourse);
    const [ diceNumber, setDiceNumber ] = useState('');
    const [ eventName, setEventName ] = useState('');
    const [ eventMoney, setEventMoney ] = useState('');
    const [ gameHistories, setGameHistories ] = useState([]);

    const rollDice=()=>{
        console.log("サイコロを振る");
       
        axios.post('http://localhost:8100/api/dice',{
            course_id: course.id,
        })
        .then(function (response){
            // console.log(response);
            // console.log(response.data);
            // console.log(response.data.dice_number);
            const responseDiceNumber = response.data.dice_number;
            const responseEventName = response.data.event.name;
            const responseEventMoney = response.data.event.money;

            setDiceNumber(responseDiceNumber);
            setEventName(responseEventName);
            setEventMoney(responseEventMoney); 
            console.log('アイテムを追加します');
            // 上から順番に処理が実行されるわけではない
            // サイコロを１回振った時は、stateのdiceNumberは初期値が空なので、空の値がgameHistoryに入ってしまう
            // 以下の書き方だとうまく動かない
            // const gameHistory={diceNumber:diceNumber, eventName:eventName, eventMoney:eventMoney}
            const gameHistory={diceNumber:responseDiceNumber, eventName:responseEventName, eventMoney:responseEventMoney}
            setGameHistories([...gameHistories, gameHistory]);
            console.log(gameHistories); 
        })
        .catch(function(error){
            console.log(error);
        })
    }

    return (
        <>
            <Header />
            <main>
                <h1>プレイ</h1>
                <p>「{course.grid}」 マス・「{course.name}」 コース　のゲームを開始します</p>
                
                <button onClick={rollDice}>サイコロを振る</button>
                <p>出たマス：{diceNumber}</p>
                <p>イベント：{eventName}</p>
                <p>イベント収支：{eventMoney}</p>
                {/* <p>{gameHistories.map((gameHistory)=><li>{gameHistory.diceNumber}{gameHistory.eventName}{gameHistory.eventMoney}</li>)}</p> */}

                <table className={styles.table}>    
                        <thead>
                            <tr>
                                <th scope="col">振った回数</th>
                                <th scope="col">出たマス</th>
                                <th scope="col">イベント</th>
                                <th scope="col">イベント収支</th>
                            </tr>
                        </thead>
                        <tbody>
                                {gameHistories.map((gameHistory,index)=>
                                <tr key={index}>
                                <td>{index+1}</td>
                                <td>{gameHistory.diceNumber}</td>
                                <td>{gameHistory.eventName}</td>
                                <td>{gameHistory.eventMoney}</td>
                                </tr>)}
                        </tbody>
                </table>
            </main>
        </>
    );
};  