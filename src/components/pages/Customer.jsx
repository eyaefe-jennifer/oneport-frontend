import './Customer.css'
import Header from '../header/Header'
import CustomerTable from './customerTable/CustomerTable'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Customer = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(
        'https://demo3522726.mockable.io/get_customers',
      )
      setData(res.data)
    }
    fetchUsers()
  }, [])

  return (
    <div className="customer">
      <div className="heading">
        <Header title="Customer" />
      </div>
      <div className="mainContent">
        <div className="btn-add">
          <h2>Customer</h2>
          <button>Add customer +</button>
        </div>
        <div className="tab-container">
          <CustomerTable customerData={data} />
        </div>
      </div>
    </div>
  )
}

export default Customer
