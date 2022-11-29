import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Header } from "./Header";
import {useState, useEffect} from 'react'
import styles from "./Components.module.css"

export const List = () => {

    const location = useLocation()
    const courseRegistrationCompletionMessage = location.state?.courseRegistrationCompletionMessage;
 
    const [courses, setCourses] = useState([])

    // useNavigate() は useEffect や return の中では宣言しない
    const navigate = useNavigate();
    
    // 削除処理　※引数をつける
    const deleteCourse=(course_id)=>{
        console.log(course_id);

        // 認証のために必要な設定の処理
        const apiToken = localStorage.getItem('apiToken');

        const headers = {
                'Authorization': `Bearer ${apiToken}`
        }
        // 削除処理のLaravelへのURL設定　※api.phpで指定した「delete」で指定する決まり
        // web.apiでURIが'/course/{id}'に設定しているので、/api/course/${course_id}にしている
        axios.delete(`http://localhost:8100/api/course/${course_id}`, {
                // 送りたい値の設定
            
        // 認証のためにheaderを設定する
        }, {headers: headers})
        // 処理が成功した場合
        .then(function(response){
                console.log(response);
                // pushはrouter v5 のやり方
                // navigate.push('/list');
                // このプロジェクトでは v6 を使っている
                // navigateだと同じページには遷移できない
                // navigate("/list");
                // 同じページを再読み込みする処理
                window.location.reload();
        })

        // エラーが出たら
        .catch(function (error) {
            console.log(error);
        });
    };
        
    // 画面表示時に実行されるコース一覧のデータを取得している
    useEffect(() => {
        console.log("useEffect");
        // localStorageにuserNameがあるか無いかでログインを判別するやり方
        // const name = localStorage.getItem('userName')
        // nameがなかった場合の処理
        // if(!name) {
        //     navigate('/login');
        //     return;
        // }

        // 認証するためにローカルストレージからAPIトークンを取り出す
        const apiToken = localStorage.getItem('apiToken');

        // 認証のためにheaderのAuthorizationにapiTokenを設定
        const headers = {
            'Authorization': `Bearer ${apiToken}`
        }

        // コース一覧を取得
        // 認証のためにheaderを設定する
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
            {/* CourseRegister.jsから送ったメッセージを表示  */}
            <div className={styles.complete_message}>
                {courseRegistrationCompletionMessage}
            </div>
            <h1>リスト</h1>      
            <button><Link to={'/course_register/'}>新規作成</Link></button>
            
            <p>＜作成済みコース一覧＞</p>
            <div>
                <ul>
                    {
                        courses.map(course => <li key={course.id}>{course.name}
                        <br /><button><Link to={'/edit/'}>編集 </Link></button> 
                        <button onClick={() => {deleteCourse(course.id);}}>削除 </button>
                        </li>)
                    }
                </ul>
            </div>
        </>
 );
};