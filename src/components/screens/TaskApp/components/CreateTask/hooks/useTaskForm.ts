import React, { useState } from 'react'
import { PartialTask } from 'src/@types/Task'

interface Props {
  onSubmit: (task: PartialTask) => void
}

export default function useTaskForm({ onSubmit }: Props) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value)
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const task: PartialTask = { title, body }
    setTitle('')
    setBody('')
    onSubmit(task)
  }

  return {
    title,
    body,
    handleTitleChange,
    handleBodyChange,
    handleSubmit
  }
}
