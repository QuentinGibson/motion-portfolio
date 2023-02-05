import './App.css'
import Marquee from './Marquee'

function App() {
  const messageElement = <span>CAUTION</span>
  return (
    <main className="App">
      <div>
        <div style={{ display: "flex" }}>
          <h2>Welcome to my side of the web</h2>
        </div>
        <h1>QUENTIN GIBSON</h1>
        <Marquee background={{ transform: "rotate(-1deg)", marginBottom: 30 }} span={messageElement} />
        <Marquee background={{ transform: "rotate(1deg)" }} span={messageElement} />
      </div>
    </main>

  )
}

export default App
