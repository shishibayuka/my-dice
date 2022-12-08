import React, { useEffect, useState } from "react";

function Map() {
    const blogs = 
    [{title: 'test', content:'いい日'}, 
     {title: 'test中', content:'悪い日'},
     {title: 'test前', content:'普通の日'}]
    const [items, setItems] = useState([]);
    const [fruits, setFruits] = useState(['りんご', 'バナナ', 'いちご'])

    const numbers = [1, 2, 3, 4, 5];

    const onAddClicked = () =>{
        console.log('アイテムを追加します');

        const item = {name: '消しゴム', memo: 'white'};
        setItems([...items, item])
        console.log(items);

        // useStateで配列に追加したい場合は...のスプレッド構文を使う
        setFruits([...fruits, 'ドリアン'])
        console.log(fruits);
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
                    blogs.map((blog)=><li>{blog.title} {blog.content}</li>)
                }
            </ul>
        </div>

    );
}

export default Map;

