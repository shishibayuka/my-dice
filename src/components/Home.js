import { Link } from "react-router-dom";
import { Header } from "./Header";

export const Home = () => {
    return (
        <>
            <Header />
            <h1>ホーム</h1>
            <div>
                ログインは<Link to={'/login/'}>こちら</Link>
                <br />
                新規登録は<Link to={'/signup/'}>こちら</Link>
            </div>
        </>
    );
};  