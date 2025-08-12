import { ContainerUserList } from "@/components/ContainerUserList"
import { useState } from "react"

export default function App(){
  
  const [show, setShow] = useState(true)

  return (
    <>
      <ContainerUserList />
    </>
  )
}


