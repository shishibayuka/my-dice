import { Link } from "react-router-dom";
import { Header } from "./Header";
import { FormInputFieldItem } from "./FormInputFieldItem";
import styles from "./Components.module.css"

export const Signup =() => {
    return (
        <>
            <Header />
            <main className={styles.center}>
                <form>
                    <div className={styles.page_title}>
                        <p>新規登録</p>
                    </div>
                    
                    <FormInputFieldItem labelName={"メールアドレス"} id={"email"} type={"text"} />
                    <FormInputFieldItem labelName={"表示名"} id={"name"} type={"text"}/>
                    <FormInputFieldItem labelName={"パスワード"} id={"password"} type={"password"} />
                    <FormInputFieldItem labelName={"パスワード確認"} id={"password_confirmation"} type={"password"} />
                   
                    {/* todo後で書き替える予定？ */}
                    {/* <div className={styles.login_form}>
                        <label htmlFor="email">メールアドレス</label>
                        <input id="email" type="text" name="email" />
                    </div>

                    <div className={styles.login_form}>
                        <label htmlFor="name">表示名</label>
                        <input id="name" type="text" name="name"/>
                    </div>

                    <div className={styles.login_form}>
                        <label htmlFor="password">パスワード</label>
                        <input id="password" type="password" name="password"/>
                    </div>

                    <div className={styles.login_form}>
                        <label htmlFor="password">パスワード確認</label>
                        <input id="password" type="password" name="password"/>
                    </div> */}

                    <div className={styles.login}>
                        <button type="submit">作成</button>
                    </div>
                </form>

                <div className={styles.login}>
                    <Link to={'/'}>HOME</Link>
                </div>
            </main>
        </>
    );
};