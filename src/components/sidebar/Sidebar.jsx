import './Sidebar.css'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from '../../assests/OnePort365-logo.png'
import { SidebarMenu } from '../../MenuList'

const Sidebar = () => {
  const location = useLocation()

  return (
    <div className="sidebar-menu">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="sidebarListItems">
        <ul className="sidebar-items">
          {SidebarMenu.map((items, index) => {
            return (
              <li key={index} className="menuList">
                <Link
                  to={items.links}
                  className={
                    location.pathname === items.links
                      ? 'menuLink active'
                      : 'menuLink'
                  }
                >
                  <div
                    className={
                      location.pathname === items.links
                        ? 'sidebar-icons active'
                        : 'sidebar-icons'
                    }
                  >
                    {items.icon}
                  </div>
                  <div className="sidebarTitle">{items.title}</div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
