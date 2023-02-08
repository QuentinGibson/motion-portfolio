import './fact.css'

const Fact = () => {
  return (
    <section className="fact-section">
      <div className="fact-container">
        <h2 className="fact-title">In Numbers</h2>
        <div className="fact-content-container">
          <p className="fact-content">Web development tools come as browser add-ons or built-in features in web browsers. Most popular web browsers, such as Google Chrome, Firefox, Internet Explorer, Safari, Microsoft Edge and Opera have built-in tools to help web developers, and many additional add-ons can be found in their respective plugin download centers.</p>
          <ul className="stats-list">
            <li className="stat">
              <div className="stat-group">
                <p className="stat-title">200+</p>
                <p className="stat-description">Projects completed</p>
              </div>
            </li>
            <li className="stat">
              <div className="stat-group">
                <p className="stat-title">20+</p>
                <p className="stat-description">Rework customers</p>
              </div>
            </li>
            <li className="stat">
              <div className="stat-group">
                <p className="stat-title">5+</p>
                <p className="stat-description">Years experience</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Fact
