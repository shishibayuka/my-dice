import React,{ useEffect, useState } from "react";

function Count() {
    const [count, setCount] = useState(10);
    let number = 111
    const name = "yamada";

    useEffect(() => {
        console.log('useEffectの実行');
        // useStateはuseEffectの中では使えない
        // const [ text, setText ] =useState("test");
        const fish = "suzuki";
        console.log(count);
        // countは変更されるとhtmlに反映される
        setCount(99)
        console.log(number);
        // numberは変更されてもhtmlに反映されないのでuseStateを使って処理を書く
        number = 70
        console.log(number);
    },[]) // 配列の中に何も指定されていないので、初期表示しか実行されない
    // },[count])　配列の中にcountが指定されているので、初期表示時とcountが変更時にuseEffectが実行される
    // })　配列が指定されていないので、初期表示時と全てのstateの変更時にuseEffectの処理が実行される

    const onCountFiveClicked = () => {
        // 関数コンポーネントの本体部分でしかuseStateは宣言できない
        // const [ text, setText ] =useState("test");
        setCount(5)
        console.log(number);
        number = 5
        console.log(number);
    }

    return(
        <div>
            <h1>Counter</h1>
            <h2>カウント: {count }</h2>
            <h2>number: {number}</h2>
            {/* <h2>{text}</h2> */}
            {/* <h2>{fish}</h2> useEffect内で定義したfishは使用できない*/}
            <h2>{name}</h2>
            <button onClick={onCountFiveClicked}>5になる</button>
        </div>
    );
}

export default Count;