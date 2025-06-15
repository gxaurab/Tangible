import { useEffect, useState } from "react";

type Datatype = {
    name: string;
    country: string;
}
const dataItem = [{
    name: "Gaurab",
    country: "Nepal"
    },
    {
        name: "Trump",
        country: "Israel"
    }]


export const Application4 = () => {
    
    const [items, setItems] = useState<Datatype[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(()=>{
        const time = setTimeout(()=>{
            setItems(dataItem)
            setLoading(false)
            console.log("Rendering ok")
        }, 2000)
        return()=>{
            clearTimeout(time)
        }
    },[])

  return (
    <div className="flex flex-col justify-center items-center py-5">
        <h1 className="text-2xl"> Welcome to the loading Assignment</h1>
        {loading?<h1 className="text-red-700  ">Loading Please Wait...</h1>: 
            
            items.map((item,index)=>(
                <div className=" py-4 text-xl text-violet-700 ">
                    <ol className="list-disc">
                        <li key={index}>Person Name: {item.name}</li>
                        <li key={index}>Belongs from:{item.country}</li>
                        <br/>
                    </ol>
                </div>
            )   )
            
            }
    </div>
  )
}
