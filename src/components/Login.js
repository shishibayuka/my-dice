import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Components.module.css";
import { Header } from "./Header";
import { useState } from "react";
import axios from "axios";

export const Login =() => {
    const location = useLocation()
    const userRegistrationCompletionMessage = location.state?.userRegistrationCompletionMessage;
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const onEmailChanged = (e) => setEmail(e.target.value);
    const onLoginClicked = () => {
        console.log(`${email}, ${password}`)

        axios.post('http://localhost:8100/api/authenticate',{
             // 送りたい値の設定
            email: email,
            password: password,
        })

        // responseの中にLaravelからリターンされた値が入っている
        // axiosでデータを取得すると、responseが返ってくるが、実際にデータが入っているのは、response.data
        .then(function(response){
            console.log(response);

            const userName = response.data.user_name
            localStorage.setItem('userName', userName);

            const apiToken = response.data.api_token
            localStorage.setItem('apiToken', apiToken);

            navigate('/list');
        })

        .catch(function(error){
            console.log(error);
        });

    };


    const [password, setPassword] = useState('');
    const onPasswordChanged = (e) =>setPassword(e.target.value);


    return (
        <>
            <Header />
            <main className={styles.center}>
                <div>{userRegistrationCompletionMessage}</div>

                
                <div className={styles.page_title}>
                    <p>ログイン</p>
                </div>

                <div className={styles.login_form}>
                    <label htmlFor="email">メールアドレス</label>
                    <input id="email" type="text" name="email" onChange={onEmailChanged} />
                </div>

                <div className={styles.login_form}>
                    <label htmlFor="password">パスワード</label>
                    <input id="password" type="password" name="password"  onChange={onPasswordChanged}/>
                </div>

                <div className={styles.login}>
                    {/* クリックするとonLoginClickedが実行される  */}
                    <button type="submit" onClick={onLoginClicked}>ログイン</button>
                </div>
                

                <div className={styles.login}>
                    <a href="/signup/">アカウント登録</a>
                </div>
            </main>
        </>
    );
};
