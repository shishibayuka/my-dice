import React from "react";
import styles from "./Components.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export const Header = () => {

    const [userName, setUserName] = useState('');
    // ログイン時に表示するリンクのstate
    const [loginLinkList, setLoginLinkList] = useState(null);

    useEffect(()=>{
        const userName = localStorage.getItem('userName')

        // localStorageにユーザー名がある場合（ログインしている場合）
        // ログインしているかの判定は、apiTokenでも可能
        if (userName){
            setUserName(`ようこそ！${userName} さん`);
            const liLoginLinkList = (
                <>
                    <li><Link to={'/list/'}>LIST</Link></li>
                    <li><Link to={'/course_register/'}>REGISTER</Link></li>
                    {/* <li><Link to={'/update/'}>UPDATE</Link></li> */}
                    <li><Link to={'/choice/'}>CHOICE</Link></li>
                    <li><Link to={'/play/'}>PLAY</Link></li>
                    <li><Link to={'/login'} onClick={onLogoutClicked}>LOGOUT</Link></li>
                </>
            )
            setLoginLinkList(liLoginLinkList);
        }
    },[])

    const onLogoutClicked = () => {
        // ログアウトは、localStorageのuserNameとapiTokenを削除することで実現している
        localStorage.removeItem('userName');
        localStorage.removeItem('apiToken');
    };

    return (
        <>
            <header>
                <div className={styles.site_title}>さいころスタジアム</div>
            </header>
            <nav>
                <ul>
                    <li><Link to={'/'}>HOME</Link></li>
                    <li><Link to={'/select/'}>▲SELECT</Link></li>
                    <li><Link to={'/game/'}>▲GAME</Link></li>
                    <li><Link to={'/ranking/'}>▲RANKING</Link></li>
                    <li><Link to={'/edit/'}>▲EDIT</Link></li>
                    {loginLinkList}
                    <li className={styles.display_user_name}>{userName}</li>
                </ul>
            </nav>

            {/* <nav>
                <ul>
                    <li><Link to={'/select/'}>▲SELECT</Link></li>
                    <li><Link to={'/game/'}>▲GAME</Link></li>
                    <li><Link to={'/ranking/'}>▲RANKING</Link></li>
                    <li><Link to={'/edit/'}>▲EDIT</Link></li>
                </ul>
            </nav> */}
        </>
    );
};

