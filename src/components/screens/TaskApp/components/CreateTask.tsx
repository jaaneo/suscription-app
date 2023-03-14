export default function CreateTask() {
  return (
    <section className="bg-slate-700 rounded p-4">
      <h2 className="font-bold mb-2">Add a Task</h2>
      <form action="">
        <div className="mb-2">
          <label htmlFor="title" className="block mb-1 text-sm">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full rounded px-2 py-1 bg-slate-800" />
        </div>
        <div className="mb-2">
          <label htmlFor="body" className="block mb-1 text-sm">
            Body
          </label>
          <textarea
            id="body"
            className="w-full rounded px-2 py-1 bg-slate-800"
          />
        </div>
      </form>
    </section>
  )
}
