import React, { useState } from "react";

const Interview = () => {
  const [question, setQuestion] = useState("");

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-6">
      
      <h1 className="text-3xl font-bold">
        AI Interview 
      </h1>

      <p className="text-lg">
        {question || "Click button to get a question"}
      </p>

      <button
        className="bg-blue-500 text-white px-6 py-2 rounded"
      >
        Get Question
      </button>

    </div>
  );
};

export default Interview;