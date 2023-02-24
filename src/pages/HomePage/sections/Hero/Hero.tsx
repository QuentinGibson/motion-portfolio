import './hero.css'
interface ReactStyles {
  [key: string]: React.CSSProperties
}
const style: ReactStyles = {
  section: {
    margin: '0 50px',
  },
  heroContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 300px",
    gridGap: '4rem',
    marginTop: "50px",
  },
  heroIntroContainer: {
    display: "flex",
    flexDirection: "column"
  },
  heroIntro: {
    letterSpacing: 2,
    fontSize: "clamp(3em,7em,14em)",
    margin: 0,
  },
  heroBanner: {
    gridColumnStart: 2,
    position: "relative",
    background: "url(./empty-circles.svg) no-repeat center center",
    display: "flex",
    alignItems: "center",
    width: 310,
    justifySelf: "center",
    minHeight: 700,
  },
  heroImage: {
    width: "100%",
    transform: "scale(0.99)",
    borderRadius: "192px 192px 192px 192px",
    zIndex: "-100",
  },
  heroCircles: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
  },
  heroUnderLine: {
    position: "relative",
    width: "60%",
    top: -70,
    transform: 'scale(1.5)',
    left: 100,
  },
  heroSmallContainer: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "30% 50%",
    gridColumnStart: 1,
    gridRowStart: 2
  },
  heroSmallButton: {
    padding: "10px 20px",
    background: "white",
    color: "black",
    borderRadius: "30px",
    fontSize: "1.3em",
    marginRight: "1em"
  },
  heroSmallContent: {
    fontSize: "1em",
  }

}
const Hero = () => {
  return (
    <section style={style.section}>
      <div style={style.heroContainer}>
        <div style={style.heroIntroContainer} >
          <h1 style={style.heroIntro}>
            QUENTIN GIBSON <br /> <span className="blue-accent">DA DOPE DEVELOPER</span>
            <img style={style.heroUnderLine} src="./crazy-line.svg" alt="" />
          </h1>
        </div>
        <div style={style.heroBanner}>
          <img style={style.heroImage} src="https://picsum.photos/400" alt="A random image" />
        </div>
        <div style={style.heroSmallContainer}>
          <button style={style.heroSmallButton}>SEE MORE</button>
          <p style={style.heroSmallContent}>Come check out my collection of dope projects. All made with React and React Native.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
