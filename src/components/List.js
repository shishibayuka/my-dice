import { Link } from "react-router-dom";
import { Header } from "./Header";

export const List = () => {
    return (
        <>
            <Header />
            <h1>リスト</h1>
            <p>＜作成済みコース一覧＞</p>
            <button>新規作成</button>
            <p>・山コース　<button><Link to={'/edit/'}>編集</Link></button> <button>削除</button></p>
            <p>・谷コース　<button><Link to={'/edit/'}>編集</Link></button> <button>削除</button></p>
        </>
    );
};  