import {Link} from 'react-router-dom'
const Error = () => {
  return (
    <>
      <h1>This Page does not exist</h1>
      <span>Try again <Link to="/">go home</Link></span>
    </>
  )
}

export default Error
