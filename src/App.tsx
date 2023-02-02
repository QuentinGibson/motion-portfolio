import './App.css'
import Marquee from './Marquee'

function App() {
  const messageElement = <span>CAUTION</span>
  return (
    <main className="App">
      <div>
        <h2>Welcome to my side of the web</h2>
        <h1>QUENTIN GIBSON</h1>
        <Marquee span={messageElement}/>
      </div>
    </main>

  )
}

export default App
