import About from './sections/About/About'
import Hero from './sections/Hero/Hero'
import Project from './sections/Project/Project'
import Service from './sections/Service/Service'
import Fact from './sections/Fact/Fact'
import Experience from './sections/Experience/Experience'
import styles from "./homepage.module.css"

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Project />
      <Service />
      <Fact />
      <Experience />
    </>
  )
}

export default HomePage
