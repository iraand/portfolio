import Sidebar from '../Sidebar/'
import * as Sections from '../sections'
import './index.scss'
import SmoothScroll from '../SmoothScroll'

const Layout: React.FC = () => {

  return (
    <>
      <Sidebar />
      <SmoothScroll>       
        <Sections.Introduction />        
        <Sections.Skills />
        <Sections.Works />
        <Sections.Banners />
        <Sections.Emails />
        <Sections.Sites />
        <Sections.Footer />
      </SmoothScroll>
    </>
  )
}

export default Layout
