import Sidebar from "./components/Sidebar"
import Header from "./components/Header"

import Dashboard from "./pages/Dashboard"
import Finances from "./pages/Finances"
import Investments from "./pages/Investments"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (

    <BrowserRouter>

      <div className="flex">

        <Sidebar />

        <div className="flex-1 ml-64">

          <Header />

          <Routes>

            <Route path="/" element={<Dashboard />} />

            <Route path="/finances" element={<Finances />} />

            <Route path="/investments" element={<Investments />} />

          </Routes>

        </div>

      </div>

    </BrowserRouter>

  )
}

export default App