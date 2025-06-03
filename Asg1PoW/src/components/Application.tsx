import UserCard from "./UserCard"

const Application = () => {
  return (
    <div>
      Below displayed text is coming from a usercard named component
      <UserCard name="Gaurab Wagle" age={100}/>
      <UserCard name="Gaurab 1" age={200}/>
    </div>
  )
}

export default Application