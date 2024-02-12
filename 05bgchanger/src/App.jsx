

import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("purple")
  return (
    <div className='w-full h-screen duration-10' style={{ backgroundColor: color }} >

      <div className='fixed flex flex-wrap justify-center bottom-12 isset-x-0 px-2 ' >

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
            onClick={() => setColor("red")}
            className='bg-red-600 text-white px-4  py-2 rounded-full border border-red-200 font-semibold  text-sm hover:bg-red-500 '
          >
            Red
          </button>
          <button
            onClick={() => setColor("blue")}
            className='bg-blue-600 text-white px-4  py-2 rounded-full border border-blue-200 font-semibold  text-sm hover:bg-blue-500 '
          >
            Blue
          </button>
          <button
            onClick={() => setColor("green")}
            className='bg-green-600 text-white px-4  py-2 rounded-full border border-green-200 font-semibold  text-sm hover:bg-green-500 '
          >
            Green
          </button>
          <button
            onClick={() => setColor("purple")}
            className='bg-purple-500 text-white px-4  py-2 rounded-full border border-purple-200 font-semibold  text-sm hover:bg-purple-800 '
          >
            Purple
          </button>
          <button
            onClick={() => setColor("yellow")}
            className='bg-yellow-600 text-white px-4  py-2 rounded-full border border-yellow-200 font-semibold  text-sm hover:bg-yellow-500 '
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("pink")}
            className='bg-pink-600 text-white px-4  py-2 rounded-full border border-pink-200 font-semibold  text-sm hover:bg-pink-500 '
          >
            Pink
          </button>
          <button
            onClick={() => setColor("black")}
            className='bg-black text-white px-4  py-2 rounded-full border border-black font-semibold  text-sm hover:bg-black '
          >
            Black
          </button>
          <button
            onClick={() => setColor("gray")}
            className='bg-gray-600 text-white px-4  py-2 rounded-full border border-gray-200 font-semibold  text-sm hover:bg-gray-800 '
          >
            Gray
          </button>
          <button
            onClick={() => setColor("white")}
            className='bg-white text-black px-4  py-2 rounded-full border border-white-800 font-semibold  text-sm hover:bg-white-200 '
          >
            White
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
