import "./marquee.css"
const Marquee = ({span, background}: any) => {
  return (
    <div>
      <div className="marquee" style={background}>
        <div className="marquee-container">
          {span}
          {span}
          {span}
          {span}
        </div>
      </div>
    </div>
  )
}

export default Marquee
