import MainMenu from "./MainMenu"
import Footer from "./Footer"
import "./page.css"
import { ReactElement, ReactNode } from "react"
interface props {
  children: ReactNode
}
const Page = ({ children }: props): ReactElement => {
  return (
    <main className="app">
      <div className="full-container">
        <MainMenu />
        <div style={{ gridRowStart: 2 }}>
          {children}
        </div>
        <Footer />
      </div>
    </main>
  )
}

export default Page
