import ReactMarkdown from "react-markdown"

export default function AdviceCard({ advice }) {

  return (

    <div className="bg-white shadow-xl rounded-2xl p-10 w-full border border-gray-100">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <h2 className="text-2xl font-semibold text-gray-800">
          AI Financial Advice
        </h2>

        <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
          AI Generated
        </span>

      </div>


      {/* Advice Content */}

      <div className="max-h-[500px] overflow-y-auto pr-3">

        <div className="prose prose-slate max-w-none">

          <ReactMarkdown
            components={{
              h3: ({children}) => (
                <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
                  {children}
                </h3>
              ),
              p: ({children}) => (
                <p className="text-gray-600 leading-relaxed">
                  {children}
                </p>
              ),
              ul: ({children}) => (
                <ul className="list-disc ml-6 text-gray-600">
                  {children}
                </ul>
              )
            }}
          >
            {advice}
          </ReactMarkdown>

        </div>

      </div>

    </div>

  )

}