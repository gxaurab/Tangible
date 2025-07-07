import { Link, Outlet } from "react-router-dom"

interface PostMock{
    id: string
    Author: string
}

const postOverview:PostMock[] = [
    {
        id: '1',
        Author: "Gaurab Wagle"
    },
    {
        id: '2',
        Author: "haurab whagle"
    }
]


export const Post = () => {
  return (
    <div className="min-h-screen">
        All posts options below
        <ul className="border-2 w-fit m-5 shadow-2xl p-4 ">
            {postOverview.map((post, index)=>(
                <Link to={post.id}><li className="text-red-800 hover:scale-110" key={index}>Post {post.id}:{post.Author}</li></Link>
            ))}
        </ul>
        <Outlet/>
    </div>
  )
}
