import { useQuery } from "@tanstack/react-query"
import axios from 'axios';

//typescript infers the data ispending error states hno need to define them


type Joke = {
  type: string;
  setup: string;
  punchline: string;
}

const getMockData = async () => {
    const res = await axios.get("https://official-joke-api.appspot.com/random_joke")
    console.log(res)
    if (res.status !== 200) {
        throw new Error("Network Error")
    }
    return res.data 
}

const Tanstack = () => {

    const { data, isPending, error } = useQuery({ queryKey: ['getdata1'], queryFn: getMockData })

  return (
    <div>

        {isPending && <h1> Loadiu=ng</h1>}
        {error && <h1>{error.message}</h1>}
        
        {data && (
            <h1> {data.type} with {data.setup} and punchline -- {data.punchline}   </h1>
        )}

    </div>
  )
}

export default Tanstack