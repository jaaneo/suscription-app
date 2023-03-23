export interface Task {
  id: string | number
  title: string
  body: string
}

export interface PartialTask {
  title: string
  body: string
}