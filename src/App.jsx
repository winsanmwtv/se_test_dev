import tbaLogo from '/tba_new.svg'
import './App.css'
import {useState} from "react";

function App() {
  // const [count, setCount] = useState(0)
  // const [countTwo, setCountTwo] = useState(0)
  const [test, setTest] = useState('Click Here')

  return (
    <>
      <div>
        <a href="https://winsanmwtv.my.canva.site/better-tba-website" target="_blank">
          <img src={tbaLogo} className="logo" alt="TBA Logo" />
        </a>
      </div>
      <p>This website is under development</p>
        <div className="card">
            {/* eslint-disable-next-line no-unused-vars */}
            <button onClick={() => setTest((test) => test = 'The button is clicked!')}>
                {test}
            </button>
        </div>
        {/*<div className="card">*/}
        {/*    <button onClick={() => setCount((count) => count + 1)}>*/}
        {/*        count is {count}*/}
        {/*    </button>*/}
        {/*    <button onClick={() => setCountTwo((countTwo) => countTwo + 1)}>*/}
        {/*        count is {countTwo}*/}
        {/*    </button>*/}
        {/*    <p>*/}
        {/*        Edit <code>src/App.jsx</code> and save to test HMR*/}
        {/*    </p>*/}
        {/*</div>*/}
        {/*<p className="read-the-docs">*/}
        {/*    Click on the Vite and React logos to learn more*/}
        {/*</p>*/}
    </>
  )
}

export default App
