import React from "react";
import styles from "./Components.module.css";
import { Header } from "./Header";
import axios from "axios";
import { useNavigate,Link, Navigate } from "react-router-dom";
import {useState, useEffect} from 'react'

export const Choice = () => {

    // useNavigate() は useEffect や return の中では宣言しない
    const navigate = useNavigate();

    // コース情報を格納する変数
    const [courses, setCourses] = useState([])

    // useEffectの中でバックエンド(Laravel)から情報を取得する
    // 画面の初期表示時にuseEffectが実行され、バックエンドから情報を取得し
    // 取得した情報を画面に表示する
    useEffect(() => {
        axios.get('http://localhost:8100/api/course')
        .then(response => {     
            // responseにバックエンドからreturnされた情報が入っている
            // setCourseで取得したデータをcoursesに格納している
            setCourses(response.data)
        })
    }, [])

    // {}は処理が１つしかないときは省略している
    const onChoiceCourseClicked = (course) => {
        console.log(`${course.name}のゲーム開始します`);
        navigate("/play", { state: {course:course}}); 
    };

    return (
        <>
            <Header />
            <h1>コース選択</h1>
            <div>
                
                <ul>
                    {
                        // バックエンドから取得したコースのデータをここで表示している
                        courses.map(course => <li key={course.id}> <button type="button" onClick={() =>{onChoiceCourseClicked(course);}}>ゲーム開始 </button>{course.name}</li>)
                    }
                </ul>
            </div>
        </>
    );
};  


