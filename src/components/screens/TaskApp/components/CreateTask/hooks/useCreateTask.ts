import { useState } from 'react'

export default function useCreateTask() {
  const [showForm, setShowForm] = useState(false)

  const handleOpen = () => {
    setShowForm(true)
  }

  const handleClose = () => {
    setShowForm(false)
  }
  return {
    showForm,
    handleOpen,
    handleClose
  }
}
