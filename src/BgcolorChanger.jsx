import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")
  const [colors, setColors] = useState(["red", "black", "yellow", "orange"])

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>

      <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          {colors.map((color, index) => (
            <button
              key={index}
              className="outline-none-px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: color }} 
              onClick={() => { setColor(color) }}
            >
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}

export default App