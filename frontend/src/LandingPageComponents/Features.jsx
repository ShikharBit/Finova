import React from "react";

const features = [
  {
    title: "AI Expense Tracking",
    desc: "Automatically categorize your spending using AI algorithms."
  },
  {
    title: "Smart Budgeting",
    desc: "AI suggests optimized budgets based on your financial behavior."
  },
  {
    title: "Financial Insights",
    desc: "Understand your spending patterns with intelligent analytics."
  },
  {
    title: "Secure Data",
    desc: "Bank-level encryption ensures your financial data stays safe."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-gray-900">
          Powerful Features
        </h2>

        <p className="text-gray-600 mt-4">
          Everything you need to manage your finances smarter.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-12">

          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-indigo-600">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {feature.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Features;