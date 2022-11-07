import styles from "./Components.module.css";
import { Header } from "./Header";

export const Ranking = () => {
    return (
        <>
            <Header />
            <main className={styles.center}>
                <h1>ランキング</h1>
                {/* <br />
                <div>○○さん、ようこそ　メニューを選択してね</div>
                <br />
                <div>▷新しいゲーム</div>
                <br />            
                <div>▷続きから再開</div>
                <br /> */}
            
                <br />
                <button>表示(マス数選択後、コースを選択し表示)</button>
                <br />
                <br />
                <div>〜 10マス 山コース ランキング 〜</div>
                <br /> 

                <center>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th scope="col">順位</th>
                            <th scope="col">名前</th>
                            <th scope="col">イベント収支</th>
                            <th scope="col">日付</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>○○</td>
                            <td>1000</td>
                            <td>2022/11/7</td>
                        </tr>
                    </tbody>
                </table>
                </center>
            </main>
        </>
    );
};  