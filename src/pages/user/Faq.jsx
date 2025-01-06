import React from "react";

function FAQs() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        <div className="bg-gray-800 p-4 rounded shadow-lg">
          <h3 className="font-bold text-xl">What services do you offer?</h3>
          <p className="text-gray-400">
            We provide IT consulting, network security, cloud solutions, and
            managed services.
          </p>
        </div>
        <div className="bg-gray-800 p-4 rounded shadow-lg">
          <h3 className="font-bold text-xl">How can I contact you?</h3>
          <p className="text-gray-400">
            You can reach us through our contact page or via email.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
