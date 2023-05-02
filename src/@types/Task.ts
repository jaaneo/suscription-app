export interface Task {
  id: string
  title: string
  description: string
  done?: boolean
}

export type CreateTaskPayload = Omit<Task, 'id'>

export type UpdateTaskPayload = Partial<CreateTaskPayload>
