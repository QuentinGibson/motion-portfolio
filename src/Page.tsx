import MainMenu from "./MainMenu"
import Footer from "./Footer"
const Page = ({children}: any) => {
  return (
    <main className="app">
      <div className="full-container">
      <MainMenu />
      {children}
        <Footer />
      </div>
    </main>
  )
}

export default Page
