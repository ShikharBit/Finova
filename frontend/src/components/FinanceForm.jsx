import { useState } from "react"
import axios from "axios"

export default function FinanceForm({ setAdvice, setFinance }) {

  const [income, setIncome] = useState("")
  const [expenses, setExpenses] = useState("")
  const [savings, setSavings] = useState("")
  const [goal, setGoal] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      setLoading(true)

      const res = await axios.post(
        "http://localhost:5000/api/finance/analyze",
        {
          income: Number(income),
          expenses: Number(expenses),
          savings: Number(savings),
          goal
        }
      )

      // update AI advice
      setAdvice(res.data.advice)

      // update financial graph data
      setFinance({
        income: Number(income),
        expenses: Number(expenses),
        savings: Number(savings)
      })

    } catch (error) {

      console.error(error)

      alert("Server error. Please check backend.")

    } finally {

      setLoading(false)

    }
  }

  return (

    <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">

      <h2 className="text-2xl font-semibold mb-6">
        Financial Information
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >

        {/* Income */}

        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">
            Monthly Income
          </label>

          <input
            type="number"
            placeholder="5000"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Expenses */}

        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">
            Monthly Expenses
          </label>

          <input
            type="number"
            placeholder="2500"
            value={expenses}
            onChange={(e) => setExpenses(e.target.value)}
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Savings */}

        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">
            Current Savings
          </label>

          <input
            type="number"
            placeholder="1000"
            value={savings}
            onChange={(e) => setSavings(e.target.value)}
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Goal */}

        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">
            Financial Goal
          </label>

          <input
            type="text"
            placeholder="Save $10,000 emergency fund"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}

        <button
          type="submit"
          disabled={loading}
          className="md:col-span-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
        >

          {loading ? "Analyzing..." : "Analyze Finances"}

        </button>

      </form>

    </div>

  )

}