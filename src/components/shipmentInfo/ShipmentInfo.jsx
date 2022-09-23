import './ShipmentInfo.css'
import { FiArrowUpRight } from 'react-icons/fi'
// import { FiArrowDownLeft } from 'react-icons/fi'
import img from '../../assests/Frame 460.png'
import { useNavigate } from 'react-router-dom'

const ShipmentInfo = ({ shippingData }) => {
  const navigate = useNavigate()

  const handleNavigation = (navLink) => {
    if (navLink === 'export') {
      navigate('/shipment')
    } else {
      navigate('/shipment/shipmentImport')
    }
  }

  return (
    <div className="shippingInfos">
      <table className="shipping-tbl">
        <thead>
          <tr>
            <th>Shipment Type</th>
            <th></th>
            <th>origin</th>
            <th></th>
            <th>destination</th>
            <th>Shipment Date</th>
            <th>Shiping id</th>
          </tr>
        </thead>
        <tbody>
          {shippingData.map((item, index) => (
            <tr key={index}>
              <td>
                <div className="arrup-icon">
                  <FiArrowUpRight className="icon" />
                </div>
              </td>
              <td>{item.shipping_type}</td>
              <td>
                {item.origin_port_code}
                <p>
                  {item.state}, {item.origin_port_country}
                </p>
              </td>
              <td>
                <img src={img} alt="" width={80} />
              </td>
              <td>
                {item.destination_port_code}
                <p>
                  {item.destination_port_city}, {item.destination_port_country}
                </p>
              </td>
              <td>{item.shipment_pickup_date}</td>
              <td>{item._id}</td>
              <td>
                <button
                  className="btn-view"
                  onClick={() => handleNavigation(item.shipping_type)}
                >
                  view Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ShipmentInfo
