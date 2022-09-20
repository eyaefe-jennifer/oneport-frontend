import './MobileMenu.css'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BsGridFill } from 'react-icons/bs'
import { IoIosPeople } from 'react-icons/io'
import { RiAccountCircleFill } from 'react-icons/ri'
import { HiDocumentText } from 'react-icons/hi'
import { HiDocumentRemove } from 'react-icons/hi'
import { HiDocumentDuplicate } from 'react-icons/hi'
import { HiTruck } from 'react-icons/hi'
import { IoMap } from 'react-icons/io5'

const MobileMenu = ({ openMenu, closeMenu }) => {
  const location = useLocation()

  if (!openMenu) {
    return <></>
  }
  return (
    <div className="mobile-menu">
      <div className="mobileSidebar">
        <ul className="mobile-items">
          <li>
            <Link
              to="/"
              className={
                location.pathname === '/' ? 'mobileLink  active' : 'mobileLink '
              }
            >
              <div className="mobile-icons">
                <BsGridFill />
              </div>
              <div className="mobileTitle">Dashboard</div>
            </Link>
          </li>
          <li>
            <Link
              to="/admin"
              className={
                location.pathname === '/admin'
                  ? 'mobileLink  active'
                  : 'mobileLink '
              }
            >
              <div className="mobile-icons">
                <IoIosPeople />
              </div>
              <div className="mobileTitle">Admin</div>
            </Link>
          </li>
          <li>
            <Link
              to="/customer"
              className={
                location.pathname.includes('/customer')
                  ? 'mobileLink  active'
                  : 'mobileLink '
              }
            >
              <div className="mobile-icons">
                <RiAccountCircleFill />
              </div>
              <div className="mobileTitle">Customer</div>
            </Link>
          </li>
          <li>
            <Link
              to="/shipment"
              className={
                location.pathname.includes('/shipment')
                  ? 'mobileLink  active'
                  : 'mobileLink '
              }
            >
              <div className="mobile-icons">
                <HiTruck />
              </div>
              <div className="mobileTitle">Shipments</div>
            </Link>
          </li>
          <li>
            <Link
              to="/tracking"
              className={
                location.pathname === '/tracking'
                  ? 'mobileLink  active'
                  : 'mobileLink '
              }
            >
              <div className="mobile-icons">
                <IoMap />
              </div>
              <div className="mobileTitle">Tracking</div>
            </Link>
          </li>
          <li>
            <Link
              to="/documents"
              className={
                location.pathname === '/documents'
                  ? 'mobileLink  active'
                  : 'mobileLink '
              }
            >
              <div className="mobile-icons">
                <HiDocumentText />
              </div>
              <div className="mobileTitle">Documents</div>
            </Link>
          </li>
          <li>
            <Link
              to="/rates"
              className={
                location.pathname === '/rates'
                  ? 'mobileLink  active'
                  : 'mobileLink '
              }
            >
              <div className="mobile-icons">
                <HiDocumentText />
              </div>
              <div className="mobileTitle">Rates</div>
            </Link>
          </li>
          <li>
            <Link
              to="/quotes"
              className={
                location.pathname === '/quotes'
                  ? 'mobileLink  active'
                  : 'mobileLink '
              }
            >
              <div className="mobile-icons">
                <HiDocumentRemove />
              </div>
              <div className="mobileTitle">Quotes</div>
            </Link>
          </li>
          <li>
            <Link
              to="/invoices"
              className={
                location.pathname === '/invoices'
                  ? 'mobileLink  active'
                  : 'mobileLink '
              }
            >
              <div className="mobile-icons">
                <HiDocumentDuplicate />
              </div>
              <div className="mobileTitle">Invoices</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MobileMenu
