import React from 'react'

function QuestionCard({ question, onAnswer, total, currentQuestion }) {
  return (
    <div
      className="min-h-screen flex justify-center items-center bg-slate-500"
      
    >

      <div className='w-1/2  h-1/2 bg-slate-400 shadow-lg p-10  rounded-3xl '>
        <p className="text-white mb-2 font-semibold">
          Ques {currentQuestion + 1} of {total}
        </p>
        <h2 className="text-white text-xl font-bold mb-4">{question.question}</h2>

        {question.options.map((opt, index) => (
          <button
            key={index}
            onClick={() => onAnswer(opt)}
            className='block w-full bg-white text-black py-2 px-4 rounded mt-4 hover:bg-gray-200 transition'
          >
            {opt}
          </button>
        ))}
      </div>

    </div>
  )
}

export default QuestionCard