import styles from './hero.module.css'

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.heroContainer}>
        <div className={styles.heroIntroContainer} >
          <h1 className={styles.heroIntro}>
            QUENTIN GIBSON <br /> <span className={ styles.blueAccent }>DA DOPE DEVELOPER</span>
          </h1>
        </div>
        <div className={styles.heroSmallContainer}>
          <button className={styles.heroSmallButton}>DOPE PROJETS</button>
        </div>
        <h2>Shoutout to all my Afican American Developers</h2>
      </div>
    </section>
  )
}

export default Hero
