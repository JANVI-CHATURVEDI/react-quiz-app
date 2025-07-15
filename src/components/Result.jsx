import React, { useEffect } from 'react';
import { confettiBlast } from '../utils/confettiBlast';

function Result({ score, total, onrestart }) {
  useEffect(() => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) {
      confettiBlast();
    }
  }, []);

  const getFeedback = () => {
    const percentage = (score / total) * 100;
    if (percentage === 100) return "🔥 Perfect score! You're a React rockstar!";
    if (percentage >= 80) return "🎯 Great job! You know your stuff.";
    if (percentage >= 50) return "💪 Not bad! A bit more practice and you’ll ace it.";
    return "🧠 Don’t worry! Every expert was once a beginner. Try again!";
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-300">
      <div className="flex flex-col justify-center items-center bg-white/70 p-10 rounded-xl shadow-2xl w-[90%] max-w-md">
        <h2 className="text-3xl p-4 font-bold text-center">Quiz Finished! 🎉</h2>
        <p className="text-2xl mb-3">You scored {score} out of {total}</p>
        <p className="text-xl text-center text-gray-800 mt-2 italic">{getFeedback()}</p>
        <button
          className="bg-red-600 hover:bg-blue-500 text-white px-6 py-2 mt-6 rounded-md transition-colors duration-300"
          onClick={onrestart}
        >
          Restart Quiz
        </button>

      </div>
    </div>
  );
}

export default Result;

