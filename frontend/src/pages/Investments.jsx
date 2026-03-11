export default function Investments(){

  return(

    <div className="p-8">

      <h1 className="text-2xl font-semibold mb-6">
        Investment Suggestions
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">

        <p className="text-gray-600 mb-4">

          Based on financial planning best practices:

        </p>

        <ul className="list-disc ml-6 space-y-2">

          <li>Index Funds (S&P 500)</li>
          <li>High Yield Savings Account</li>
          <li>Government Bonds</li>
          <li>Retirement Accounts</li>

        </ul>

      </div>

    </div>

  )

}