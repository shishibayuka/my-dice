import { Link, useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { FormInputFieldItem } from "./FormInputFieldItem";
import styles from "./Components.module.css"
import React, { useState, useEffect } from 'react';
import axios from "axios";

export const Signup =() => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPassword_confirmation] = useState("");
    const [inputPasswordErrorList, setInputPasswordErrorList] = useState([]);
    const [inputNameErrorList, setInputNameErrorList] = useState(['']); 
    const [inputEmailErrorList, setInputEmailErrorList] = useState(['']); 



    // Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     // Update the document title using the browser API
//     console.log(msg);
//     // axios.post("")
//   },[msg]);
const createUser=()=>{
    setInputEmailErrorList([]);
    setInputNameErrorList([]);
    setInputPasswordErrorList([]);

    console.log("新規作成");
    axios.post('http://localhost:8100/api/user', {
        name: name,
        email: email,
        password: password,
        password_confirmation: password_confirmation,
      })
      .then(function (response) {
        // navigate("/login/", { state: { userRegistrationCompletionMessage:response.data }});
        console.log(response);

        // Todo: ユーザー登録後にログイン状態にする、遷移する

        // 移動するときの方法（参考）
        // document.location.href = "/";
        // window.location.href = "/";
        // const errorMessage = "エラーです（ ;  ; ）";]
        // navigate('/contact');
        // navigate("/login/", { state: {errorMessage}});
        // navigate("/login/", { state: { userRegistrationCompletionMessage:"登録完了" }});
      })

    //   エラーが出たら
      .catch(function (error) {
        console.log(error);

        // メールアドレスのエラーがない場合、undefinedのエラーがmapを使用すると出る
        if (error.response.data.email !== undefined){
            // エラーメッセージを設定
            setInputEmailErrorList(error.response.data.email);
        }

        // パスワードのエラーがない場合、undefinedのエラーがmapを使用すると出る
        if (error.response.data.password !== undefined){
            setInputPasswordErrorList(error.response.data.password);
        }

        // 名前のエラーがない場合、undefinedのエラーがmapを使用すると出る
        if (error.response.data.name !== undefined){
            setInputNameErrorList(error.response.data.name);
        }


      });
};


    return (
        <>
            <Header />
            <div className={styles.center}>
                <>
                    <div className={styles.page_title}>
                        <p>新規登録</p>
                    </div>

                   
                        <FormInputFieldItem labelName={"メールアドレス"} id={"email"} type={"text"} onChange={(v) =>setEmail(v)} />
                        <div>
                            {/* エラーの表示をする */}
                            {inputEmailErrorList.map((errorMessage,index)=> <div className={styles.input_error} key={index}>{errorMessage}</div>)}
                        </div>
                        
                        <FormInputFieldItem labelName={"表示名"} id={"name"} type={"text"} onChange={(v) => setName(v)} />
                        <div>
                            {inputNameErrorList.map((errorMessage,index)=> <div className={styles.input_error} key={index}>{errorMessage}</div>)}
                        </div>

                        <FormInputFieldItem labelName={"パスワード"} id={"password"} type={"password"} onChange={(v) => setPassword(v)} />
                        <div>
                            {inputPasswordErrorList.map((errorMessage,index)=> <div className={styles.input_error} key={index}>{errorMessage}</div>)}
                        </div>

                        <FormInputFieldItem labelName={"パスワード確認"} id={"password_confirmation"} type={"password"} onChange={(v) => setPassword_confirmation(v)}/>

                    {/* 入力画面の書き方参考 */}
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
                        <button onClick={() => {console.log("test");createUser();}}>作成</button>
                    </div>
                </>

                <div className={styles.login}>
                    <Link to={'/'}>HOME</Link>
                </div>
            </div>
        </>
    );
};