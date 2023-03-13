interface Props {
  title: string
  body: string
}

export default function TaskItem({ title, body }: Props) {
  return (
    <li className="rounded w-full bg-slate-700 px-8 py-4">
      <h2 className="font-bold">{title}</h2>
      <p className="text-sm font-bold">{body}</p>
    </li>
  )
}
