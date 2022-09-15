import './MobileMenu.css'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { SidebarMenu } from '../../MenuList'

const MobileMenu = ({ openMenu, closeMenu }) => {
  const location = useLocation()

  if (!openMenu) {
    return <></>
  }
  return (
    <div className="mobile-menu">
      <div className="mobileSidebar">
        <ul className="mobile-items" onClick={closeMenu}>
          {SidebarMenu.map((items, index) => {
            return (
              <li key={index} className="mobileList">
                <Link
                  to={items.links}
                  className={
                    location.pathname === items.links
                      ? 'mobileLink active'
                      : 'mobileLink'
                  }
                >
                  <div
                    className={
                      location.pathname === items.links
                        ? 'mobile-icons active'
                        : 'mobile-icons'
                    }
                  >
                    {items.icon}
                  </div>
                  <div className="mobileTitle">{items.title}</div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default MobileMenu
