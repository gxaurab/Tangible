import { useState } from "react"

const useToggle = (initial: boolean) => {
  const [toggle, setToggle] = useState(initial)

  const showModal = () => {
    setToggle(prev => !prev)
  }

  return { toggle, showModal, setToggle }
}

export default useToggle
