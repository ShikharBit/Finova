import { useState } from "react"
import FinanceForm from "../components/FinanceForm"
import AdviceCard from "../components/AdviceCard"
import ExpenseChart from "../components/ExpenseChart"

export default function Dashboard(){

  const [advice,setAdvice] = useState("")
  const [finance,setFinance] = useState({
    income:0,
    expenses:0,
    savings:0
  })

  // Financial Health Score Calculation
  const score =
    finance.income === 0
      ? 0
      : Math.round((finance.savings / finance.income) * 100)

  return(

    <div className="p-8 bg-gray-100 min-h-screen space-y-6">

      {/* TOP SECTION */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Finance Form */}

        <FinanceForm
          setAdvice={setAdvice}
          setFinance={setFinance}
        />

        {/* Chart */}

        <ExpenseChart
          income={finance.income}
          expenses={finance.expenses}
          savings={finance.savings}
        />

      </div>

      {/* FINANCIAL HEALTH SCORE */}

      <div className="bg-white p-6 rounded-xl shadow">

        <h2 className="text-lg font-semibold mb-2">
          Financial Health Score
        </h2>

        <p className="text-3xl font-bold text-blue-600">
          {score}/100
        </p>

        <p className="text-sm text-gray-500 mt-2">
          Based on savings to income ratio
        </p>

      </div>

      {/* AI ADVICE */}

      {advice && (

        <AdviceCard advice={advice} />

      )}

    </div>

  )
}