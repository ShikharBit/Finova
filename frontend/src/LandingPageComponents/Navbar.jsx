import { Link } from "react-router-dom"

function Navbar() {

  return (

    <nav className="w-full fixed top-0 bg-white shadow z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold text-indigo-600">
          Finova AI
        </h1>

        <div className="space-x-6">

          <Link to="/" className="text-gray-600 hover:text-indigo-600">
            Home
          </Link>

          <Link to="/dashboard" className="text-gray-600 hover:text-indigo-600">
            Dashboard
          </Link>

        </div>

      </div>

    </nav>

  )

}

export default Navbar