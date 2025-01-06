import React from "react";
import SampleComponent from "../../components/user/sampleComponent";

const Sample = () => {
  const cards = [
    {
      id: 1,
      absoluteTitle: "Absolute Title 1",
      title: "Title for card 1",
      description: "16 pages | 1200 words | 24-Feb-2024 1.",
    },
    {
      id: 2,
      absoluteTitle: "Absolute Title 2",
      title: "Title for card 2",
      description: "20 pages | 1500 words | 25-Feb-2024 2.",
    },
  ];

  return (
    <section>
      <div className="px-10 pt-10 text-center">
        <h1 className="font-bold text-6xl py-7">Sample Projects</h1>
        <p className="text-lg line-clamp-4">
          Comprehensive Assignment Assistance With a No-AI Guarantee!
        </p>
      </div>
      <div>
        <h2 className="font-bold py-7 text-4xl text-white mx-10 border-b border-gray-400"></h2>
        <div className="grid px-10 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {cards.map((card, index) => (
            <SampleComponent key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sample;
