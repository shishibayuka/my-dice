import styles from "./Components.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <>
            <header>
                <div className={styles.site_title}>さいころスタジアム</div>
            </header>
            <nav>
                <ul>
                    <li><Link to={'/'}>HOME</Link></li>
                    <li><Link to={'/select/'}>SELECT</Link></li>
                    <li><Link to={'/game/'}>GAME</Link></li>
                    <li><Link to={'/ranking/'}>RANKING</Link></li>
                    <li><Link to={'/list/'}>LIST</Link></li>
                </ul>
            </nav>
        </>
    );
};

