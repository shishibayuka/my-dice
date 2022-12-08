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
    const rollDice=()=>{
        console.log("サイコロを振る");

        axios.post('http://localhost:8100/api/dice',{
            course_id: course.id,
        })
        .then(function (response){
            console.log(response);
            console.log(response.data);
            console.log(response.data.dice_number);
            setDiceNumber(response.data.dice_number);
            setEventName(response.data.event.name);
            setEventMoney(response.data.event.money);       
        })
        .catch(function(error){
            console.log(error);
        })
    }
    // const [ playHistory,setPlayHistory] = useState([''])
    // const [ grid, setGrid ] = useState([''])
    
    // useEffect(() => {
    //     console.log("useEffect");
        
    //     // 認証するためにローカルストレージからAPIトークンを取り出す
    //     const apiToken = localStorage.getItem('apiToken');

    //     // 認証のためにheaderのAuthorizationにapiTokenを設定
    //     const headers = {
    //         'Authorization': `Bearer ${apiToken}`
    //     }
        
    //     // コース一覧を取得
    //     // 認証のためにheaderを設定する
    //     axios.get('http://localhost:8100/api/play_history', {headers: headers})

    //     // 認証成功時（headerのAuthorizationにapiTokenを設定している場合）
    //     // ＝ログインしているとき
    //     // api.phpでauth:sanctumを利用して認証チェックをしている

    //     .then(response => {
    //         // console.log(response)
    //         // console.log(response.data)
    //         // console.log(response.data.course)
    //         // console.log(response.data.course.name)
    //         setPlayHistory(response.data.course.name)
    //         setGrid(response.data.course.grid)

    //     },[])

    //     .catch(function (error) {
    //         console.log(error);
    //     })
    // })

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
            </main>
        </>
    );
};  