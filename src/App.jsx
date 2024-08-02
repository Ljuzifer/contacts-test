import { useState } from 'react'
// import reactLogo from './assets/react.svg?url'
import RLogo from './assets/react.svg'
import Logo from './assets/vite.svg'
// import viteLogo from '/vite.svg?url'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{display: "flex", justifyContent:"space-between"}}>
        
        
        <a href="https://vitejs.dev" target="_blank" className='logo'>
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
          <Logo width={88} height={88} />
        </a>
        <a href="https://react.dev" target="_blank" className='logo react'>
          {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
          <RLogo width={88} height={88} className="react" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
