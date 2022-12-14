import React from "react";
import styles from "./Components.module.css";
import { Header } from "./Header";

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