import React from "react";

const steps = [
  "Connect your financial accounts",
  "AI analyzes your transactions",
  "Get smart financial insights"
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-20 bg-gray-50">

      <div className="max-w-6xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-12">

          {steps.map((step, index) => (
            <div key={index} className="p-6">

              <div className="text-3xl font-bold text-indigo-600">
                {index + 1}
              </div>

              <p className="mt-4 text-gray-600">
                {step}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default HowItWorks;