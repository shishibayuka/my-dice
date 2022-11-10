import React, { useState, useEffect } from "react";

export const ExampleEffect=()=> {
    const [count, setCount] = useState(0);
    let a = 1
    document.title = 'Test';

    useEffect(() => {
        document.title = `あなたは${count}回クリックしました`;
    });

    return (
        <div>
            <p id="text">あなたは{count}回クリックしました</p>
            <button onClick={() => setCount(count + 1)}>
                押してね！
            </button>
        </div>
    )
}