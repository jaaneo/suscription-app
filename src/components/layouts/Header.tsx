export default function Header() {
  return (
    <div className="Navbar">
      <nav className="bg-white justify-center text-center z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <img src="https://img.icons8.com/ios/150/000000/saitama.png" className="h-10 mr-3 to-white" alt="Flowbite Logo" />
            <span className="self-center text-slate-800 font-semibold whitespace-nowrap dark:text-white text-2xl">Suscription App</span>
          </a>
          <div className="flex md:order-2">
            <button type="button" className="text-white bg-slate-700 hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <a href="/login">LOGIN</a>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="/" className="block py-2 pl-3 pr-4 text-white bg-slate-700 rounded md:bg-transparent md:text-slate-900 md:p-0 md:dark:text-slate-800" aria-current="page">Home</a>
              </li>
              <li>
                <a href="/about" className="block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700">About</a>
              </li>
              <li>
                <a href="/login" className="block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700">Login</a>
              </li>
              <li>
                <a href="/contacto" className="block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
