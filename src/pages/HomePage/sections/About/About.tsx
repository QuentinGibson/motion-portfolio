import AboutStyle from "./AboutStyle"
import styles from './about.module.css'
const { mainContainer, leftContainer, rightContainer, starContainer, subContainer, starImage, subImage } = AboutStyle
const About = () => {
  return (
    <section className={styles.section}>
      <div className={styles.thinLine}></div>
      <h2 className={styles.title}>About</h2>
      <div style={mainContainer}>
        <div style={leftContainer}>
          <span className={styles.subtitle}>Who could be more powerful than
            a developer who can design.</span>
          <p className={styles.content}>I am a dedicated Mobile and Back-end developer who loves coding and problem-solving. I am very happy when I am creating a software, then I am when doing anything else. Then why did I suddenly find the audacity to do the unthinkable, learn design? I mean come on we all know developers can not learn design. Or can they? And should they? </p>
        </div>
        <div style={rightContainer}>
          <div style={starContainer}><img style={starImage} src="https://picsum.photos/200/150?random=1" alt="" /></div>
          <div style={subContainer}><img style={subImage} src="https://picsum.photos/200/150?random=2" alt="" /></div>
        </div>
      </div>
    </section>
  )
}

export default About
