import style from '../assets/css/Layout.module.css'

const Layout = ({children}) => {
  let LayoutHTML = (<>
    <div className={`${style.contentDashboard}`}>
      <h1>Layout</h1>
      {children}
    </div>
  </>)

  return LayoutHTML
}

Layout.defaultProps = {
  component: 'e'
}

export default Layout