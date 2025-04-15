import { useState } from 'react'; 
import reactLogo from './assets/react.svg'; 
import viteLogo from '/vite.svg'; 
import './App.css'; 

function App() {
  const [color, setColor] = useState('orange'); // State for background color, initialized to 'orange'

  // Function to change the background color (commented out and unused here)
  // function changeColor(color){
  //   setColor(color)
  // }

  return (
    <div
      className="w-full h-screen duration-200" // Full width, full height, and smooth duration transition
      style={{ backgroundColor: color }} // Dynamic background color from state
    >
      {/* Bottom fixed button container */}
      <div className="fixed flex flex-wrap justify-center w-full bottom-12 inset-x-0 px-2">
        {/* Button group with rounded styles and shadow */}
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {/* Button to set background color to red */}
          <button
            onClick={() => setColor('red')} // Updates color state to 'red' when clicked
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg" // Tailwind styling
            style={{ backgroundColor: 'red' }} // Inline styling for red background
          >
            Reddd
          </button>
          {/* Button to set background color to blue */}
          <button
            onClick={() => setColor('blue')} // Updates color state to 'blue' when clicked
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg" // Tailwind styling
            style={{ backgroundColor: 'blue' }} // Inline styling for blue background
          >
            Blue
          </button>
          {/* Button to set background color to green */}
          <button
            onClick={() => setColor('green')} // Updates color state to 'green' when clicked
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg" // Tailwind styling
            style={{ backgroundColor: 'green' }} // Inline styling for green background
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App; // Exporting the App component as the default export
