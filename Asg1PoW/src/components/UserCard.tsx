interface details{
    name:string
    age: number
}


const UserCard = ({name,age}: details) => {
  return (
    <div>
        <p> My name is {name} and my age is {age}</p>
    </div>
  )
}

export default UserCard