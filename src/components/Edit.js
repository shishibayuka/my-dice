import React from "react";
import styles from "./Components.module.css";
import { Link } from "react-router-dom";
import { Header } from "./Header";

export const Edit = () => {
    return (
        <>
            <Header />
            <main className={styles.center}>
            <h1>編集</h1>
            <p> ＜コース編集＞ </p>
            <p> 〜コース名〜 </p>
            <input id="course" type="course" name="course"/>
            <p> 〜コース説明〜 </p>
            <input id="course_description" type="course_description" name="course_description"/>
            <p>〜イベント一覧〜</p>
            <center>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th scope="col">イベント名</th>
                        <th scope="col">収支</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input id="event" type="event" name="event"/></td>
                        <td><input id="event_money" type="event_money" name="event_money" /></td>
                    </tr>
                </tbody>
            </table>
            </center>
            <br />
            <button><Link to={''}>項目追加</Link></button>
            <br /><br />
            <button><Link to={'/list/'}>更新</Link></button>
            </main>
        </>
    );
};  