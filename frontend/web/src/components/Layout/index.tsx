import Aside from "../Aside"
import Header from "../Header"

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <div className="grid grid-layout h-screen min-w-[315px] bg-primary">
    <Header />
    <Aside />
    <div className="content-layout h-[calc(100vh-90px)] px-5 py-15">
      { children }
    </div>
  </div>
)

export default Layout
