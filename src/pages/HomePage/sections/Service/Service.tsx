import "./service.css"

const Service = () => {
  return (
    <section className="section">
      <div className="service-container">
        <div className="gridContainer">
          <div>
            <h2 className="section-title">Services</h2>
            <p className="transparent-service">SER<br />VICES</p>
          </div>
          <div className="content-container">
            <p className="description">Web development tools come as browser add-ons or built-in features in web browsers. Most popular web browsers, such as Google Chrome, Firefox, Internet Explorer, Safari, Microsoft Edge and Opera have built-in tools to help web developers, and many additional add-ons can be found in their respective plugin download centers.</p>
            <ul className="service-list">
              <li className="list-item">Web Development</li>
              <li className="list-item">App Design</li>
              <li className="list-item">Brand Identity</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service
