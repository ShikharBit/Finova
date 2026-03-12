import { Link } from "react-router-dom"

function Sidebar() {

  return (

    <div className="w-64 h-screen bg-gray-900 text-white fixed">

      <h2 className="text-2xl font-bold p-6">
        Finova AI
      </h2>

      <nav className="flex flex-col space-y-4 px-6">

        <Link to="/dashboard" className="hover:text-indigo-400">
          Dashboard
        </Link>

        <Link to="/finances" className="hover:text-indigo-400">
          Finances <span className="font-medium text-red-500">#FIP</span>
        </Link>

        <Link to="/investments" className="hover:text-indigo-400">
          Investments <span className="font-medium text-red-500">#FIP</span>
        </Link>

      </nav>

    </div>

  )

}

export default Sidebar