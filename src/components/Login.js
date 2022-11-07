import styles from "./Components.module.css";
import { Header } from "./Header";

export const Login =() => {
    return (
        <>
            <Header />
            <main className={styles.center}>
                <form>
                    <div className={styles.page_title}>
                        <p>ログイン</p>
                    </div>

                    <div className={styles.login_form}>
                        <label htmlFor="email">メールアドレス</label>
                        <input id="email" type="text" name="email" />
                    </div>

                    <div className={styles.login_form}>
                        <label htmlFor="password">パスワード</label>
                        <input id="password" type="password" name="password"/>
                    </div>

                    <div className={styles.login}>
                        <button type="submit">ログイン</button>
                    </div>
                </form>

                <div className={styles.login}>
                    <a href="/signup/">アカウント登録</a>
                </div>
            </main>
        </>
    );
};
