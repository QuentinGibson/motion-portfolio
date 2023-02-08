import AboutStyle from "./AboutStyle"
const { section, mainContainer, leftContainer, title, subtitle, content, rightContainer, starContainer, subContainer, starImage, subImage, thinLine } = AboutStyle
const About = () => {
  return (
    <section style={section}>
      <div style={thinLine}></div>
      <h2 style={title}>About</h2>
      <div style={mainContainer}>
        <div style={leftContainer}>
          <p style={subtitle}>Who could be more powerful than
            a developer who can design.</p>
          <p style={content}>I am a dedicated Mobile and Back-end developer who loves coding and problem-solving. I am very happy when I am creating a software, then I am when doing anything else. Then why did I suddenly find the audacity to do the unthinkable, learn design? I mean come on we all know developers can not learn design. Or can they? And should they? </p>
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
