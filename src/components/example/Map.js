import React, { useEffect, useState } from "react";

function Map() {
    const list = 
    [{title: 'test', content:'いい日'}, 
     {title: 'test中', content:'悪い日'},
     {title: 'test前', content:'普通の日'}]
    const [items, setItems] = useState([]);
    const [fruits, setFruits] = useState(['りんご', 'バナナ', 'いちご'])

    const [ blogs, setBlogs ] = useState([]);

    const numbers = [1, 2, 3, 4, 5];

    const displays = [
        {diceNumber:6, eventName:'海へいく1', eventMoney:1001 },
        {diceNumber:6, eventName:'海へいく1', eventMoney:1001 }
    ];

    const onAddClicked = () =>{
        console.log('アイテムを追加します');

        const item = {name: '消しゴム', memo: 'white'};
        setItems([...items, item])
        console.log(items);

        // useStateで配列に追加したい場合は...のスプレッド構文を使う
        setFruits([...fruits, 'ドリアン'])
        console.log(fruits);
    }

    const onAddEventClicked = () =>{
        const blog ={ No:'1', title:'ミルク', content:'牛'};
        setBlogs([...blogs, blog])
        console.log(blogs);
    }

    return(
        <div>
            <h1>Map</h1>
            <button onClick={onAddClicked}>追加</button>
            <ul>
                {
                    items.map((item)=><li>{item.name}{item.memo}</li>)
                }
            </ul>
            <ul>
                {
                    numbers.map((number) => <li>{number}</li>)
                }
            </ul>
            <ul>
                {
                    fruits.map((fruit)=><li>{fruit}</li>)
                }
            </ul>
            <ul>
                {
                    list.map((item)=><li>{item.title} {item.content}</li>)
                }
            </ul>
                            <ul>
                {
                    numbers.map((number) => <li>{number}</li>)
                }
                <button onClick={onAddEventClicked}>イベント追加</button>
                <p>{blogs.map((blog)=><li>{blog.No}{blog.title}{blog.content}</li>)}</p>
            </ul>
        </div>

    );
}

export default Map;

