import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

export default function ExpenseChart({ income, expenses, savings }) {

  const data = [
    { name: "Income", value: income },
    { name: "Expenses", value: expenses },
    { name: "Savings", value: savings }
  ]

  return (

    <div className="bg-white shadow-lg rounded-xl p-6">

      <h2 className="text-lg font-semibold mb-4">
        Financial Overview
      </h2>

      <ResponsiveContainer width="100%" height={260}>

        <BarChart data={data}>

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          {/* Colored Bars */}

          <Bar
            dataKey="value"
            fill="#2563eb"
            radius={[6, 6, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  )

}