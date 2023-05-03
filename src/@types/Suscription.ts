export interface Suscription {
  id: string
  name: string
  description: string
  datePayment?: string
  image?: string
  type?: string
  done?: boolean
}

export type CreateSuscriptionPayload = Omit<Suscription, 'id'>

export type UpdateSuscriptionPayload = Partial<CreateSuscriptionPayload>
