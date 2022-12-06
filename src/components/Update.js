import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "./Header";
import {  useLocation, useNavigate } from "react-router-dom";

export const Update = () => {

    const [courses, setCourses] = useState([])
    const location = useLocation()

    // navigate("/update/", { state: { id: 1 }});で値を送って
    // location.state.idの形で値を受け取れる
    // list.js navigate("/update/", { state: { id: 1 }});のid:1を送ってここで受け取る
    // const id = (location.state || {}).id
    const course = (location.state || {}).course

    const navigate = useNavigate();

    const [name, setName] = useState(course.name);
    const onNameChanged = (e) => setName(e.target.value);
    
    const [description, setDescription] = useState(course.description);
    const onDescriptionChanged = (e) => setDescription(e.target.value);

    const [grid, setGrid] = useState(course.grid);
    const onGridChanged = (e) => setGrid(e.target.value);


    // console.log(this.props.location.state.text);
    const updateCourse=()=>{   
        const course_id = course.id;
        
        // 認証するためにローカルストレージからAPIトークンを取り出す
        const apiToken = localStorage.getItem('apiToken');

        // 認証のためにheaderのAuthorizationにapiTokenを設定
        const headers = {
            'Authorization': `Bearer ${apiToken}`
        }
        console.log(`コース名は${name}です、コース説明は${description}です、マス数は${grid}です`);
        axios.patch(`http://localhost:8100/api/course/${course_id}`, {
                // 送りたい値の設定
                name: name,
                description: description,
                grid: grid,
            }, {headers: headers})

        .then(response => {
            console.log(response)
            setCourses(response.data)   
            navigate("/list");         
        })
        // エラーが出たら
        .catch(function (error) {
            console.log(error);
            console.log(error.response.data);
        });
    };


        // useEffect(() => {
        //     console.log('useEffectが実行されました')
        //     console.log(course)
        //     // console.log(id)
        //     // })
        // }, [])

    return (
        <>
            <Header />
            <h1>コース編集</h1>
            <label htmlFor="courseName">コース名:</label>
            <input
            type="text"
            id="courseName"
            name="courseName"
            value={name}
            onChange={onNameChanged}
            />

            <label htmlFor="courseDescription">コース説明:</label>
            <input
            type="text"
            id="courseDescription"
            name="courseDescription"
            // defaultValueで初期値を書き換え可能にする
            // defaultValue={course.description}
            value={description}
            onChange={onDescriptionChanged}
            />

            <label htmlFor="courseName">マス数:</label>
            <input
            type="number"
            id="courseGrid"
            name="courseGrid"
            value={grid}
            onChange={onGridChanged}
            />
                    
            <div>
                <ul>
                    <button onClick={() => {updateCourse();}}>更新
                    </button>
                </ul>
            </div>
        </>
    )
}