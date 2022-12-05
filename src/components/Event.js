import React from "react";
import axios from "axios";
import { useState } from "react";
import { Header } from "./Header";

export const Event = () => {
    const [name, setName] = useState('');
    const onNameChanged = (e) => setName(e.target.value);
    
    const [description, setDescription] = useState('');
    const onDescriptionChanged = (e) => setDescription(e.target.value);


    const [grid, setGrid] = useState('');
    const onGridChanged = (e) => setGrid(e.target.value);
    const onSaveCourseClicked = () => console.log(`コース名は${name}です、コース説明は${description}です、マス数は${grid}です`);
    
    const [inputNameErrorList, setInputNameErrorList] = useState(['']);
    const [inputDescriptionErrorList, setInputDescriptionErrorList] = useState(['']);
    const [inputGridErrorList, setInputGridErrorList] = useState(['']); 

const createCourse=()=>{
        setInputNameErrorList([]);
        setInputDescriptionErrorList([]);
        setInputGridErrorList([]);


        axios.post('http://localhost:8100/api/course', {
                name: name,
                description: description,
                grid: grid,
        })
        .then(function(response){
                console.log(response);
        })

        // エラーが出たら
        .catch(function (error) {
                console.log(error);

                // コース名のエラーがない場合、undefinedのエラーがmapを使用すると出る
                if(error.response.data.name !== undefined){
                        setInputNameErrorList(error.response.data.name);
                }

                if(error.response.data.description !== undefined){
                        setInputDescriptionErrorList(error.response.data.description);
                }

                if(error.response.data.grid !== undefined) {
                        setInputGridErrorList(error.response.data.grid);
                }
        });
};

    return (
        <>
         <Header />
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

        
        
        <button type="button" onClick={createCourse}>
                Save Post
        </button>
        </>
    )
}