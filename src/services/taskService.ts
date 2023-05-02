import axios, { Axios } from 'axios'
import { CreateTaskPayload, Task, UpdateTaskPayload } from 'src/@types/Task'

const baseUrl = 'http://localhost:4000/v1/auth'

const getAll = async (): Promise<Task[]> => {
  const { data } = await axios.get(baseUrl)
  return data
}

const getById = async (id: string): Promise<Task> => {
  const { data } = await axios.get(`${baseUrl}/${id}`)
  return data
}

const create = async (payload: CreateTaskPayload): Promise<Task> => {
  const { data } = await axios.post(baseUrl, payload)
  return data
}

const update = async (id: string, payload: UpdateTaskPayload) => {
  const { data } = await axios.put(`${baseUrl}/${id}`, payload)
  return data
}

const remove = async (id: string): Promise<Task> => {
  const { data } = await axios.delete(`${baseUrl}/${id}`)
  return data
}

const getTaskService = () => ({
  getAll,
  getById,
  create,
  update,
  remove
})

export default getTaskService
