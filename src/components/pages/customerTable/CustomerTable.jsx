import './CustomerTable.css'
import { Link } from 'react-router-dom'

const CustomerTable = ({ customerData }) => {
  return (
    <div className="customerTable">
      <div className="tbhead">
        <h6>first name</h6>
        <h6>last name</h6>
        <h6>email address</h6>
        <h6>phone number</h6>
        <h6>last login</h6>
      </div>
      <table className="customer-tbl">
        <tbody>
          {customerData.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.Avatar} alt="" height={30} width={0} />
              </td>
              <td>{item.first_name} </td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.ip_address}</td>
              <td>
                <Link to={`/customer/${item.id}`}>
                  <button className="btn-ship">Shipments</button>
                </Link>
              </td>
              <td>
                <button className="btn-edit">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CustomerTable
