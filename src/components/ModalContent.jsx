import React from "react";

export default function ModalContent({ country, closeModal }) {
  return (
    <div
      className="fixed z-10 top-0 left-0 w-full h-full bg-gray-800/95 flex justify-center items-center"
      onClick={closeModal}
    >
      <div
        className="min-w-[500px] relative rounded p-7 bg-gray-50"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-1 w-8 h-8 flex justify-center items-center text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded"
          onClick={closeModal}
        >
          X
        </button>
        <h2 className="text-2xl mb-4">
          Here is {country.name.common}'s information
        </h2>
        <p className="text-lg mb-2">
          <span className="font-semibold">Language(s)</span>:{" "}
          {Object.entries(country.languages).map((lang) => lang[1] + " ")}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">Capital</span>: {country.capital[0]}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">Population</span>:{" "}
          {country.population}
        </p>
      </div>
    </div>
  );
}
