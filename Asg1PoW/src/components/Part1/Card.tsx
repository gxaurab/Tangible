
export interface cardDetails{
    id: number
    height: number
    name: string
    location: string
    difficulty: string
    budget: number
    days: number
    details: string[]
}


const Card = ({name, height,location, difficulty, budget,days, details}:cardDetails) => {
  return (
    <div className="bg-red-100 m-5 p-1 border-l-2 border-t-2  rounded-3xl">
        <h1>Located at {location}, the {name} is at height of {height}m with a {difficulty} difficulty level.</h1>
        <h2>You will be spending {days} days and expenses will be around {budget} NPR </h2>
        <ul>
            {details.map((detail, index)=>(
                <li key={index}>{detail}</li>
            ))}
        </ul>
    </div>
  )
}

export default Card