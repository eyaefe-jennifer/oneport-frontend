import './Header.css'
import TemocLogo from '../../assests/Rectangle 184.png'
import notifyLogo from '../../assests/Group 92.png'
import { BsChevronDown } from 'react-icons/bs'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import logo from '../../assests/OnePort365-logo.png'
import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import MobileMenu from '../mobileMenu/MobileMenu'

const Header = ({ title }) => {
  const [toggleMobile, setToggleMobile] = useState(false)

  const closeMenu = () => {
    setToggleMobile(false)
  }

  return (
    <div className="Header">
      <div className="logo">
        <AiOutlineMenu
          className="openMobile"
          onClick={() => {
            setToggleMobile(true)
          }}
        />
        <img src={logo} alt="" />
      </div>
      <MobileMenu openMenu={toggleMobile} closeMenu={closeMenu} />
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="notify">
        <MdOutlineNotificationsNone className="notifyIcon" />
        <img src={notifyLogo} alt="" className="notifyLogo" />
        <div className="notify-logo">
          <img src={TemocLogo} alt="" className="temocImg" />
          <div className="notifyTxt">
            <h3>Temoc</h3>
            <BsChevronDown fontSize={10} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
