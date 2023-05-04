import axios from 'axios'
import { CreateSuscriptionPayload, Suscription, UpdateSuscriptionPayload } from 'src/@types/Suscription'

const baseURL = 'http://localhost:4500/api/suscriptions'

const getSuscriptionClient = (token?: string) => axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`
  }
})

const getSuscriptionService = (token?: string) => {
  const getAll = async (): Promise<Suscription[]> => {
    const { data } = await getSuscriptionClient(token).get('/')
    return data
  }

  const getById = async (id: string): Promise<Suscription> => {
    const { data } = await getSuscriptionClient(token).get(`/${id}`)
    return data
  }

  const create = async (payload: CreateSuscriptionPayload): Promise<Suscription> => {
    const { data } = await getSuscriptionClient(token).post('/', payload)
    return data
  }

  const update = async (id: string, payload: UpdateSuscriptionPayload) => {
    const { data } = await getSuscriptionClient(token).put(`/${id}`, payload)
    return data
  }

  const remove = async (id: string): Promise<Suscription> => {
    const { data } = await getSuscriptionClient(token).delete(`/${id}`)
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
export default getSuscriptionService
