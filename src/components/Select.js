import React from "react";
import styles from "./Components.module.css";
import { Header } from "./Header";
import axios from "axios";
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react'

export const Select = () => {

    // コース情報を格納する変数
    const [courses, setCourses] = useState([])

    // useEffectの中でバックエンド(Laravel)から情報を取得する
    // 画面の初期表示時にuseEffectが実行され、バックエンドから情報を取得し
    // 取得した情報を画面に表示する
    useEffect(() => {
        axios.get('http://localhost:8100/api/course')
        .then(response => {
            console.log(response)
            // responseにバックエンドからreturnされた情報が入っている
            // setCourseで取得したデータをcoursesに格納している
            setCourses(response.data)
        })
    }, [])


    return (
        <>
            <Header />
            <h1>コース選択</h1>
            <div>
                <ul>
                    {
                        // バックエンドから取得したコースのデータをここで表示している
                        courses.map(course => <li key={course.id}> <button><Link to={'/edit/'}>編集 </Link></button> <button>削除 </button>{course.name}</li>)
                    }
                </ul>
            </div>
        </>
 );
};  




















export const Game = () => {
    return (
        <>
            <Header />
            <main className={styles.center}>
                <h1>ゲーム</h1>
                <div>
                    コースを選択してください
                    <br />
                    ＜選択＞
                    <button>これにする</button>
                    <br />
                    「○○コース」でよろしいですか？
                    <button>ゲームスタート（このボタンを押すと下記画面が出現する）</button>
                    <br /><br />
                    10マスのすごろくです
                    <br />
                    残り6マスです
                    <br />
                    サイコロを振りましょう→<button>振る</button>
                </div>

                <center>
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
                            <tr>
                                <td>1</td>
                                <td>4</td>
                                <td>蟻に噛まれた</td>
                                <td>-100</td>
                            </tr>
                        </tbody>
                    </table>
                </center>
            </main>
        </>
    );
};  