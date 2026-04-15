import { useEffect } from "react"
import DeleteGenderForm from "./components/DeleteGenderForm"

const DeleteGender = () => {
  useEffect(() => {
    document.title = "Delete Gender Page"
  }, [])

  return (
    <>
      <DeleteGenderForm />
    </>
  )
}

export default DeleteGender