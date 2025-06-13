import { useState } from "react"
import Modal from "./Modal"

const Mastery2 = () => {

  const [modal, setModal] = useState<boolean>(false)
  const [name, setName] = useState<string>("")

  const toggleModal = ()=>{
    setModal(prev=> !prev)
  } 
  
  const handleName =(e: React.ChangeEvent<HTMLInputElement>)=>{
    setName(e.target.value)
  }


  return (
    <div className="flex flex-col bg-amber-100 m-4 items-center p-6 gap-6">
      {modal && 
      <Modal 
        modal={toggleModal} 
        name={name}
        onChangeName ={handleName}/>}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ex voluptatum a consequatur libero itaque nesciunt error repudiandae excepturi nostrum earum rerum quo iure soluta sunt, magnam sint fugit quibusdam!
      </p>
      <button 
        className="bg-green-400 p-3 hover:bg-green-800 text-white rounded"

        onClick={toggleModal}> 
        Open Modal</button>

      <h1 className="text-xl">Hello, {name}</h1>
    </div>
  )
}

export default Mastery2