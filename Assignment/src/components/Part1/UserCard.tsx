interface details{
    name:string
    age: number
}


const UserCard = ({name,age}: details) => {
  return (
    <div className="flex flex-col text-center text-3xl font-medium border-b-2">
        <p> My name is {name} and my age is {age}</p>
    </div>
  )
}

export default UserCard