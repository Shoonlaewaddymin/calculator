import React from 'react'

const Buttons = ({handleCalculation}) => {
  return (
    <div className='bg-gray-800 w-full grid grid-cols-4 '>
      <button onClick={(e)=> handleCalculation(e.target.innerText)} className='p-5 text-white translation duration-300 hover:bg-gray-700 border-gray-600'>C</button>
      <button onClick={(e)=> handleCalculation(e.target.innerText)} className='p-5 text-white translation duration-300 hover:bg-gray-700 border-gray-600'>(</button>
      <button onClick={(e)=> handleCalculation(e.target.innerText)} className='p-5 text-white translation duration-300 hover:bg-gray-700 border-gray-600'>)</button>
      <button onClick={(e)=> handleCalculation(e.target.innerText)} className='p-5 text-white translation duration-300 hover:bg-gray-700 border-gray-600'>AC</button>
      
      <button onClick={(e)=> handleCalculation(e.target.innerText)} className='p-5 text-white translation duration-300 hover:bg-gray-700 border-gray-600'>1</button>
      <button onClick={(e)=> handleCalculation(e.target.innerText)} className='p-5 text-white translation duration-300 hover:bg-gray-700 border-gray-600'>2</button>
      <button onClick={(e)=> handleCalculation(e.target.innerText)} className='p-5 text-white translation duration-300 hover:bg-gray-700 border-gray-600'>3</button>
      <button onClick={(e)=> handleCalculation(e.target.innerText)} className='p-5 text-white translation duration-300 hover:bg-gray-700 border-gray-600'>+</button>


      <button onClick={(e)=> handleCalculation(e.target.innerText)} className='p-5 text-white translation duration-300 hover:bg-gray-700 border-gray-600'>4</button>
      <button onClick={(e)=> handleCalculation(e.target.innerText)} className='p-5 text-white translation duration-300 hover:bg-gray-700 border-gray-600'>5</button>
      <button onClick={(e)=> handleCalculation(e.target.innerText)} className='p-5 text-white translation duration-300 hover:bg-gray-700 border-gray-600'>6</button>
      <button onClick={(e)=> handleCalculation(e.target.innerText)} className='p-5 text-white translation duration-300 hover:bg-gray-700 border-gray-600'>-</button>

      <button onClick={(e)=> handleCalculation(e.target.innerText)} className='p-4 text-white translation duration-300 hover:bg-gray-700 border-gray-600'>7</button>
      <button onClick={(e)=> handleCalculation(e.target.innerText)} className='p-4 text-white translation duration-300 hover:bg-gray-700 border-gray-600'>8</button>
      <button onClick={(e)=> handleCalculation(e.target.innerText)} className='p-4 text-white translation duration-300 hover:bg-gray-700 border-gray-600'>9</button>
      <button onClick={(e)=> handleCalculation(e.target.innerText)} className='p-4 text-white translation duration-300 hover:bg-gray-700 border-gray-600'>*</button>
      
      <button onClick={(e)=> handleCalculation(e.target.innerText)} className='p-4 text-white translation duration-300 hover:bg-gray-700 border-gray-600'>.</button>
      <button onClick={(e)=> handleCalculation(e.target.innerText)} className='p-4 text-white translation duration-300 hover:bg-gray-700 border-gray-600'>0</button>
      <button onClick={(e)=> handleCalculation(e.target.innerText)} className='p-4 text-white translation duration-300 hover:bg-gray-700 border-gray-600'>00</button>
      <button onClick={(e)=> handleCalculation(e.target.innerText)} className='p-4 text-white translation duration-300 hover:bg-gray-700 border-gray-600'>&divide;</button>

      <button onClick={(e)=> handleCalculation(e.target.innerText)} className='p-4 text-white translation duration-300 hover:bg-gray-700 border-gray-600'>%</button>
      <button onClick={(e)=> handleCalculation(e.target.innerText)} className='p-4 text-white translation duration-300 hover:bg-gray-700 border-gray-600 bg-amber-700 col-span-3'>=</button>
      



    </div>
  )
}

export default Buttons