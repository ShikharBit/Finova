import { useNavigate } from "react-router-dom"

function Hero() {

  const navigate = useNavigate()

  return (

    <section className="bg-gray-50 pt-32 pb-20">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>

          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            AI Powered Financial Management
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Track expenses, manage investments, and get AI financial advice
            all in one powerful dashboard.
          </p>

          <button
            onClick={() => navigate("/dashboard")}
            className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
          >
            Get Started
          </button>

        </div>

        <img
          src="https://plus.unsplash.com/premium_photo-1667239426890-dc8bf557397a?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded-xl shadow-lg"
        />

      </div>

    </section>

  )

}

export default Hero