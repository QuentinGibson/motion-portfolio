interface StyleList {
  [key: string]: React.CSSProperties
}
const AboutStyle: StyleList = {
  mainContainer: {
    display: 'flex',
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: "1000px"
  },
  title: {
    color: '#67686A',
    textTransform: 'uppercase',
    fontSize: "2.2em"
  },
  rightContainer: {
    width: "310px",
    display: 'flex',
    flexDirection: 'column',
  },
  starContainer: {
    display: 'flex',
    justifyContent: "flex-end",
    background: "url(./left-sided-empty-circles.svg) no-repeat center center",
    margin: "30px 0"
  },
  subContainer: {
    justifyContent: "flex-start",
    display: 'flex',
    background: "url(./left-sided-empty-circles.svg) no-repeat center center"
  },
  starImage: {
    position: "relative",
    borderRadius: "192px 0 0 192px"

  },
  subImage: {
    position: "relative",
    borderRadius: "0 192px 192px 0"
  },
}

export default AboutStyle
