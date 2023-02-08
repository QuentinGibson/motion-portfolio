interface ReactStyles {
  [key: string]: React.CSSProperties
}

const ProjectStyle: ReactStyles = {
  section: {
    margin: "50px 50px",
    position: "relative",
  },
  thinLine: {
    borderTop: "1px solid #ffffff",
    margin: '90px 0',
  },
  crazyline: {
    position: "relative",
    right: -200,
  },
  projectContainer: {
    display: 'grid',
    gridTemplateColumns: '40% 1fr',
    gridTemplateRows: 800,
    gridColumnGap: '10%',
    marginTop: 80,
    marginBottom: 80,
    marginRight: '160px'
  },
  project: {
    display: 'flex',
    flexDirection: 'column'
  },
  projectImageFirstVariation: {
    borderRadius: '192px 192px 192px 0',
    width: "100%",
    objectFit: 'contain'
  },
  projectImageSecondVariation: {
    borderRadius: '192px 192px 0 192px',
    width: "100%",
    objectFit: 'contain'
  },
  projectContainerAlt: {
    display: 'grid',
    gridTemplateColumns: '50% 40%',
    gridColumnGap: '10%',
    margin: '0 80px'
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  projectDetailsContainer: {
    margin: '20px 0'
  },
  title: {
    textTransform: 'uppercase',
    color: "#67686A",
    fontSize: '2.2em',
    marginTop: '10px'
  },
  projectTitle: {
    color: "#ffffff",
    fontSize: "3.25em",
    textTransform: 'uppercase',
    fontWeight: '900',
    margin: 0
  },
  leftList: {
    display: 'flex',
    padding: 0,
    margin: 0
  },
  rightList: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: 0,
    padding: 0
  },
  listItem: {
    fontSize: "1em",
    color: "#67686A",
    textTransform: 'uppercase'
  }
}

export default ProjectStyle
