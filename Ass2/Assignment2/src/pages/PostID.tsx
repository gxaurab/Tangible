import { useEffect, useState } from "react"
import {  useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

interface ApiData{
    userId: number
    id: number
    title: string
    completed: boolean
}


export const PostID = () => {
    const navigate = useNavigate()

    const {id} = useParams()
    const [post, setPost] = useState<ApiData | null>(null)

    const fetchData = async ()=>{
        const promise = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        const data = await promise.json()
        setPost(data)
    }


    useEffect(() => {
        fetchData()
    }, [id]);



    return (
    <div className="min-h-screen">PostID Component here
        <div className="m-5">
            {post && (
                <div>
                    <h2> Title: {post.title}</h2>
                    <p> user Id: {post.userId}</p>
                    <p> Completed: {post.completed? "yes": "no"}</p>
                </div>
            )}
            <button 
                className="bg-green-500 text-white p-2 hover:bg-green-400"
            onClick={()=> navigate(-1)}>Go back</button>
        </div>
    </div>
  )
}
