import React from "react";
import { useState } from "react";

export default function Form() {
    // useStateを使ってテキストボックスの値を保持する
    // 変数titleをsetTitleを使用して値を書き換える
    // titleはイコールでは書き換えられない
    const [title, setTitle] = useState('');

    // eはイベント
    // eはテキストボックスを変更した(テキストボックスを書き換えた)イベントが入っている
    // e.target.valueはテキストボックスに入力した値が入っている
    const onTitleChanged = (e) => setTitle(e.target.value);

    // {}は処理が１つしかないときは省略している
    const onSaveBookClicked = () => console.log(`タイトルは${title}です`);
    
    // const onSaveBookClicked = () => {
    //     console.log(`タイトルは${title}です`);
    // console.log(`タイトルは${title}です`);
    // };

    return (
        <>
        <label htmlFor="bookTitle">Book Title:</label>
        <input
        type="text"
        id="bookTitle"
        name="bookTitle"
        value={title}
        onChange={onTitleChanged} // onChangeはテキストボックスの値が変更されたとき、onTitleChangedメソッドが実行される
        />
        {/* onClickはボタンをクリックしたときにonSaveBookClickedメソッドが実行される */}
        <button type="button" onClick={onSaveBookClicked}>
            Save Post</button>
            </>
    );
}