import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Header } from "./Header";
import {useState, useEffect} from 'react'

export const List = () => {

    const [courses, setCourses] = useState([])
    // useNavigate() は useEffect や return の中では宣言しない
    const navigate = useNavigate();


    useEffect(() => {
        // localStorageにuserNameがあるか無いかでログインを判別するやり方
        // const name = localStorage.getItem('userName')
        // nameがなかった場合の処理
        // if(!name) {
        //     navigate('/login');
        //     return;
        // }

        const apiToken = localStorage.getItem('apiToken');

        // headerのAuthorizationにapiTokenを設定
        const headers = {
            'Authorization': `Bearer ${apiToken}`
        }

        // コース一覧を取得
        axios.get('http://localhost:8100/api/post_courses', {headers: headers})
        // 認証成功時（headerのAuthorizationにapiTokenを設定している場合）
        // ＝ログインしているとき
        // api.phpでauth:sanctumを利用して認証チェックをしている
        .then(response => {
            console.log(response)
            setCourses(response.data)
        })

        // 認証失敗時（headerのAuthorizationにapiTokenを設定されていない場合）
        .catch(function (error) {
            console.log(error);
            const status = error.response.status;
            // ステータスが401の場合(ログインできていない)
            if (status === 401){
                navigate('/login');
            }
        })
    }, []) // 第二引数が[]になっていると、ページ表示時に一回のみ
    // useEffectの中の処理が実行される
    // 今回はページ表示時に一回のみuseEffectの中が実行される

    return (
        <>
            <Header />
            <h1>リスト</h1>
            <p>＜作成済みコース一覧＞</p>
            <button><Link to={'/course_register/'}>新規作成</Link></button>

            <div>
                <ul>
                    {
                        courses.map(course => <li key={course.id}>{course.name}
                        <br /><button><Link to={'/edit/'}>編集 </Link></button> <button>削除 </button></li>)
                    }
                </ul>
            </div>
        </>
 );
};