import './App.css'
import Marquee from './Marquee'

function App() {
  const messageElement = <span>CAUTION</span>
  return (
    <main className="App"><Marquee span={messageElement}/></main>
  )
}

export default App
