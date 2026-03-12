import React from "react";

const Testimonials = () => {
  return (
    <section className="py-20">

      <div className="max-w-6xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold">
          Loved by Developers
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="p-6 bg-white shadow rounded-lg">
            <p className="text-gray-600">
              "This app completely changed how I track my finances."
            </p>
            <h4 className="mt-4 font-semibold">Alex Chen</h4>
          </div>

          <div className="p-6 bg-white shadow rounded-lg">
            <p className="text-gray-600">
              "The AI insights are surprisingly accurate."
            </p>
            <h4 className="mt-4 font-semibold">Sarah Kim</h4>
          </div>

          <div className="p-6 bg-white shadow rounded-lg">
            <p className="text-gray-600">
              "Best financial dashboard I've ever used."
            </p>
            <h4 className="mt-4 font-semibold">David Miller</h4>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;