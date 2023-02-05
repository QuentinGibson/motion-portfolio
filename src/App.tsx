import './App.css'
import Marquee from './Marquee'

function App() {
  const messageElement = <span>CAUTION</span>
  return (
    <main className="App">

      {/* Quote Section Start */}
      <div style={{ display: "grid", gridTemplate: "80%  20% / 70%  30%", margin: "80px 50px" }}>
        <div style={{ display: "flex", justifyContent: 'center', alignItems: "center" }}>
          <span style={{ fontSize: "4em", fontWeight: "bolder", textTransform: "lowercase" }}>We do not fear the unknown. We fear what we think we know about the unknown</span>
        </div>
        <div style={{ display: "flex", justifyContent: 'center', justifyItems: "center", gridRowStart: "2", gridColumnStart: "2" }}>
          <span style={{ fontSize: "2.3em", fontWeight: "bolder" }}>- Teal Swan</span>
        </div>
      </div>
      {/* Quote Section End */}

      {/* <Marquee background={{ transform: "rotate(-1deg)", marginBottom: 30 }} span={messageElement} /> */}
      {/* <Marquee background={{ transform: "rotate(1deg)" }} span={messageElement} /> */}
    </main>

  )
}

export default App
