import './Home.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SideBar from '../sidebar/Sidebar'
import Customer from '../pages/Customer'
import ShipmentCustomer from '../pages/ShipmentCustomer'
import Shipments from '../pages/Shipment'
import ImportShipments from '../pages/import/ImportShipment'

const Home = () => {
  return (
    <Router>
      <div className="home">
        <div className="AppGlass">
          <div className="app-sidebar">
            <SideBar />
          </div>
          <div className="appPage">
            <Routes>
              <Route path="/" element={<h1>Hello</h1>} />
              <Route path="/customer" element={<Customer />} />
              <Route
                path="/customer/:customerId"
                element={<ShipmentCustomer />}
              />
              <Route path="/shipment" element={<Shipments />} />
              <Route
                path="/shipment/shipmentImport"
                element={<ImportShipments />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default Home
