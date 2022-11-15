import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ApiFetch = () => {

    const [posts, setPosts] = useState([])
    const courses = [1, 2, 3, 4, 5];

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            setPosts(res.data)
        })
    }, [])

    return (
        <div>
            <ul>
                {courses.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })}
            </ul>
            <ul>
            {
                posts.map(post => <li key={post.id}> {post.title}{post.userId} </li>)
            }
            </ul>
            
        </div>
    )
}

export default ApiFetch