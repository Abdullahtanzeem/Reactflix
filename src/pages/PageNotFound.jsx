import pageNotfound from "../assets/images/pagenotfound.jpg"
import { Link } from "react-router-dom"
export const PageNotFound = () => {
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-slate-200">404, Oops! page not found </p>
          <div className="max-w-lg">
            <img className="rounded" src={pageNotfound} alt=" 404 PageNotFound image" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-700 group-hover:from-cyan-500 group-hover:to-blue-700 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Back to Home
              </span>
            </button>
          </Link>

        </div>
      </section>
    </main>
  )
}
