import './Sidebar.css'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from '../../assests/OnePort365-logo.png'
import { BsGridFill } from 'react-icons/bs'
import { IoIosPeople } from 'react-icons/io'
import { RiAccountCircleFill } from 'react-icons/ri'
import { HiDocumentText } from 'react-icons/hi'
import { HiDocumentRemove } from 'react-icons/hi'
import { HiDocumentDuplicate } from 'react-icons/hi'
import { HiTruck } from 'react-icons/hi'
import { IoMap } from 'react-icons/io5'

const SideBar = () => {
  const location = useLocation()

  return (
    <div className="sideBar-menu">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul className="Menu-list">
        <li>
          <Link
            to="/"
            className={location.pathname === '/' ? 'links active' : 'links'}
          >
            <div className="icons">
              <BsGridFill />
            </div>
            <div className="list-items">Dashboard</div>
          </Link>
        </li>
        <li>
          <Link
            to="/admin"
            className={
              location.pathname === '/admin' ? 'links active' : 'links'
            }
          >
            <div className="icons">
              <IoIosPeople />
            </div>
            <div className="list-items">Admin</div>
          </Link>
        </li>
        <li>
          <Link
            to="/customer"
            className={
              location.pathname.includes('/customer') ? 'links active' : 'links'
            }
          >
            <div className="icons">
              <RiAccountCircleFill />
            </div>
            <div className="list-items">Customer</div>
          </Link>
        </li>
        <li>
          <Link
            to="/shipment"
            className={
              location.pathname.includes('/shipment') ? 'links active' : 'links'
            }
          >
            <div className="icons">
              <HiTruck />
            </div>
            <div className="list-items">Shipments</div>
          </Link>
        </li>
        <li>
          <Link
            to="/tracking"
            className={
              location.pathname === '/tracking' ? 'links active' : 'links'
            }
          >
            <div className="icons">
              <IoMap />
            </div>
            <div className="list-items">Tracking</div>
          </Link>
        </li>
        <li>
          <Link
            to="/documents"
            className={
              location.pathname === '/documents' ? 'links active' : 'links'
            }
          >
            <div className="icons">
              <HiDocumentText />
            </div>
            <div className="list-items">Documents</div>
          </Link>
        </li>
        <li>
          <Link
            to="/rates"
            className={
              location.pathname === '/rates' ? 'links active' : 'links'
            }
          >
            <div className="icons">
              <HiDocumentText />
            </div>
            <div className="list-items">Rates</div>
          </Link>
        </li>
        <li>
          <Link
            to="/quotes"
            className={
              location.pathname === '/quotes' ? 'links active' : 'links'
            }
          >
            <div className="icons">
              <HiDocumentRemove />
            </div>
            <div className="list-items">Quotes</div>
          </Link>
        </li>
        <li>
          <Link
            to="/invoices"
            className={
              location.pathname === '/invoices' ? 'links active' : 'links'
            }
          >
            <div className="icons">
              <HiDocumentDuplicate />
            </div>
            <div className="list-items">Invoices</div>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SideBar
