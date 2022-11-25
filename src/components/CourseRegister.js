import axios from "axios";
import { useState } from "react";
import { Header } from "./Header";

export const CourseRegister = () => {
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

        // 登録処理のLaravelへのURL設定
        // postで'http://localhost:8100/api/course'にアクセスする
        axios.post('http://localhost:8100/api/course', {
                // 送りたい値の設定
                name: name,
                description: description,
                grid: grid,
        })
        // 処理が成功した場合
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
                登録
        </button>
        </>
    )
}








// import { useLocation } from "react-router-dom";
// import styles from "./Components.module.css";
// import { Header } from "./Header";

// export const Register =() => {
//     const location = useLocation()
//     const userRegistrationCompletionMessage = location.state?.userRegistrationCompletionMessage;

//     return (
//         <>
//             <Header />
//             <main className={styles.center}>
//                 <div>{userRegistrationCompletionMessage}</div>

//                 <form>
//                     <div className={styles.page_title}>
//                         <p>コース登録</p>
//                     </div>

//                     <div className={styles.login_form}>
//                         <label htmlFor="email">メールアドレス</label>
//                         <input id="email" type="text" name="email" />
//                     </div>

//                     <div className={styles.login_form}>
//                         <label htmlFor="password">パスワード</label>
//                         <input id="password" type="password" name="password"/>
//                     </div>

//                     <div className={styles.login}>
//                         <button type="submit">ログイン</button>
//                     </div>
//                 </form>

//                 <div className={styles.login}>
//                     <a href="/signup/">アカウント登録</a>
//                 </div>
//             </main>
//         </>
//     );
// };
