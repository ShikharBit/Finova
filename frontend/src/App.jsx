import { BrowserRouter, Routes, Route } from "react-router-dom"

import Sidebar from "./components/Sidebar"
import Header from "./components/Header"

import Dashboard from "./pages/Dashboard"
import Finances from "./pages/Finances"
import Investments from "./pages/Investments"

import LandingPage from "./pages/LandingPage"

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Dashboard Layout Pages */}

        <Route
          path="/dashboard"
          element={
            <div className="flex">

              <Sidebar />

              <div className="flex-1 ml-64">

                <Header />

                <Dashboard />

              </div>

            </div>
          }
        />

        <Route
          path="/finances"
          element={
            <div className="flex">

              <Sidebar />

              <div className="flex-1 ml-64">

                <Header />

                <Finances />

              </div>

            </div>
          }
        />

        <Route
          path="/investments"
          element={
            <div className="flex">

              <Sidebar />

              <div className="flex-1 ml-64">

                <Header />

                <Investments />

              </div>

            </div>
          }
        />

      </Routes>

    </BrowserRouter>

  )

}

export default App