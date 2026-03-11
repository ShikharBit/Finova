import { Home, Wallet, TrendingUp } from "lucide-react"
import { Link } from "react-router-dom"

export default function Sidebar() {

  return (

    <div className="fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white p-6">

      <h1 className="text-2xl font-bold mb-10">
        Finol AI
      </h1>

      <nav className="space-y-6">

        <Link
          to="/"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <Home size={20}/>
          Dashboard
        </Link>

        <Link
          to="/finances"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <Wallet size={20}/>
          Finances
        </Link>

        <Link
          to="/investments"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <TrendingUp size={20}/>
          Investments
        </Link>

      </nav>

    </div>

  )

}