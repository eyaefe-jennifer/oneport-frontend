import './CustomerTable.css'
import { Link } from 'react-router-dom'

const CustomerTable = ({ customerData }) => {
  return (
    <div className="customerTable">
      <table className="customer-tbl">
        <thead>
          <tr>
            <th>First Name</th>
            <th></th>
            <th>Last Name</th>
            <th>email address</th>
            <th>phone number</th>
            <th>last login</th>
          </tr>
        </thead>
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
