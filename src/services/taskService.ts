import axios from 'axios'
import { CreateTaskPayload, Task, UpdateTaskPayload } from 'src/@types/Task'

const baseURL = 'http://localhost:4000/v1/tasks'

const getTaskClient = (token?: string) => axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`
  }
})

const getTaskService = (token?: string) => {
  const getAll = async (): Promise<Task[]> => {
    const { data } = await getTaskClient(token).get('/')
    return data
  }

  const getById = async (id: string): Promise<Task> => {
    const { data } = await getTaskClient(token).get(`/${id}`)
    return data
  }

  const create = async (payload: CreateTaskPayload): Promise<Task> => {
    const { data } = await getTaskClient(token).post('/', payload)
    return data
  }

  const update = async (id: string, payload: UpdateTaskPayload) => {
    const { data } = await getTaskClient(token).put(`/${id}`, payload)
    return data
  }

  const remove = async (id: string): Promise<Task> => {
    const { data } = await getTaskClient(token).delete(`/${id}`)
    return data
  }
  return {
    getAll,
    getById,
    create,
    update,
    remove
  }
}
export default getTaskService
