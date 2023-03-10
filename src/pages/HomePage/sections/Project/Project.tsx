import ProjectStyle from './Projectstyle'
import './project.css'

const { section, thinLine, crazyline, projectContainer, project, projectImageFirstVariation, projectImageSecondVariation, title, projectDetailsContainer, projectTitle, leftList, listItem, projectContainerAlt, titleContainer } = ProjectStyle
const Project = () => {
  return (
    <section style={section}>
      <div style={thinLine}></div>
      <div style={titleContainer}>
        <h2 style={title}>Projects</h2>
        <img style={crazyline} src="./crazy-line.svg" alt="A line that sticks out from the side of the website" />
      </div>
      <div style={projectContainer}>
        <div style={project}>
          <img style={projectImageFirstVariation} src="https://picsum.photos/400/480" alt="" width={400} />
          <div style={projectDetailsContainer}>
            <span style={projectTitle}>Triumph App</span>
            <ul style={leftList}>
              <li style={listItem}>IOS</li>
              <li style={listItem}>Swift IU</li>
              <li style={listItem}>NODE.JS</li>
            </ul>
          </div>
        </div>
        <div style={project}>
          <div style={projectDetailsContainer}>
            <span style={projectTitle}>Novelist Website</span>
            <ul style={leftList}>
              <li style={listItem}>IOS</li>
              <li style={listItem}>Swift IU</li>
              <li style={listItem}>NODE.JS</li>
            </ul>
          </div>
          <img style={projectImageSecondVariation} src="https://picsum.photos/820/480" alt="" width={820} />
        </div>
      </div>
      <div style={projectContainerAlt}>
        <div style={project}>
          <img style={projectImageFirstVariation} src="https://picsum.photos/820/500" alt="" width={820} />
          <div style={projectDetailsContainer}>
            <span style={projectTitle}>RUMESPP DESIGN</span>
            <ul style={leftList}>
              <li style={listItem}>IOS</li>
              <li style={listItem}>Swift IU</li>
              <li style={listItem}>NODE.JS</li>
            </ul>
          </div>
        </div>
        <div style={project}>
          <div style={projectDetailsContainer}>
            <span style={projectTitle}>VIEW UI DASHBOARD</span>
            <ul style={leftList}>
              <li style={listItem}>IOS</li>
              <li style={listItem}>Swift IU</li>
              <li style={listItem}>NODE.JS</li>
            </ul>
          </div>
          <img style={projectImageSecondVariation} src="https://picsum.photos/400/480" alt="" width={400} />
        </div>
      </div>
    </section>
  )
}

export default Project
