import axios from "axios";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import {useState, useEffect} from 'react'

export const List = () => {

    const [courses, setCourses] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8100/api/post_courses')
        .then(response => {
            console.log(response)
            setCourses(response.data)
        })
    }, [])

    return (
        <>
            <Header />
            <h1>リスト</h1>
            <p>＜作成済みコース一覧＞</p>
            <button>新規作成</button>

            <div>
                <ul>
                    {
                        courses.map(course => <li key={course.id}> {course.name}
                        <br /><button><Link to={'/edit/'}>編集 </Link></button> <button>削除 </button></li>)
                    }
                </ul>
            </div>
        </>
 );
};