import { useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext"
import ThemeToggler from "../Components/ThemeToggler"

interface PostMock{
    id: string
    Author: string
}

const postOverview:PostMock[] = [
    {
        id: '1',
        Author: "Item no 1"
    },
    {
        id: '2',
        Author: "Item no 2 "
    }
]

 

export const Post = () => {

    const {theme} = useContext(ThemeContext)

  return (
    <div className="content-center flex justify-center min-h-5 ">

        All posts options below
        <ul className= {theme === 'dark'?" bg-black text-white border-2 w-fit text-3xl m-5 shadow-2xl mt-40 p-4 ":"border-2 w-fit text-3xl m-5 shadow-2xl mt-40 p-4 "} >
            {postOverview.map((post, index)=>(
                <Link to={post.id}><li className=" hover:scale-110" key={index}>Post {post.id}:{post.Author}</li></Link>
            ))}
        </ul>

        <ThemeToggler/>
        
        <Outlet/>
    </div>
  )
}
