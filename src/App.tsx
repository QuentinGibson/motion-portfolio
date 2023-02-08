import './App.css'
// import Marquee from './Marquee'

function App() {
  // const messageElement = <span>CAUTION</span>
  return (
    <main className="App">

      {/* IDEA Section Start */}
      {/* IDEA Section End */}

      {/* droptop Section Start */}
      {/* <div style={{ background: "white" }}> */}
      {/*   <div style={{ display: "flex", margin: "20px 0" }}> */}
      {/*     <span style={{ textTransform: "uppercase", fontSize: "11em", fontFamily: "Anton", lineHeight: "90%", letterSpacing: 0.2, color: "black" }}> */}
      {/*       WHAT'S A ROCKSTAR TO A DOUGHBOY */}
      {/*     </span> */}
      {/*   </div> */}
      {/*   <span></span> */}
      {/* </div> */}
      {/* droptop Section Start */}


      <div style={{ margin: "0 50px " }}>
        {/* Quote Section Start */}
        <div style={{ display: "grid", gridTemplate: "80%  20% / 70%  30%", margin: "100px 0" }}>
          <div style={{ display: "flex", justifyContent: 'center', alignItems: "center" }}>
            <span style={{ fontSize: "4em", fontWeight: "bolder", textTransform: "lowercase" }}>We do not fear the unknown. We fear what we think we know about the unknown</span>
          </div>
          <div style={{ display: "flex", justifyContent: 'center', justifyItems: "center", gridRowStart: "2", gridColumnStart: "2" }}>
            <span style={{ fontSize: "2.3em", fontWeight: "bolder" }}>- Teal Swan</span>
          </div>
        </div>
        {/* Quote Section End */}
      </div>

      {/* <Marquee background={{ transform: "rotate(-1deg)", marginBottom: 30 }} span={messageElement} /> */}
      {/* <Marquee background={{ transform: "rotate(1deg)" }} span={messageElement} /> */}
    </main>

  )
}

export default App
