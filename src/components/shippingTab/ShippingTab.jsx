import './ShippingTab.css'
import svgImg from '../../assests/Icon.png'
import Modal from '../modal/Modal'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useState } from 'react'

const ShippingTab = () => {
  const [modal, setModal] = useState(false)

  const closeModal = () => {
    setModal(false)
  }

  return (
    <div className="shipping-tab">
      <div className="container-fluid">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="navItems active"
              id="nav-documents-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-documents"
              type="button"
              role="tab"
              aria-controls="nav-documents"
              aria-selected="true"
            >
              Documents
            </button>
            <button
              className="navItems"
              id="nav-details-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-details"
              type="button"
              role="tab"
              aria-controls="nav-details"
              aria-selected="false"
            >
              Cargo Details
            </button>
            <button
              className="navItems"
              id="nav-services-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-services"
              type="button"
              role="tab"
              aria-controls="nav-services"
              aria-selected="false"
            >
              Additional Services
            </button>
            <button
              className="navItems"
              id="nav-rates-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-rates"
              type="button"
              role="tab"
              aria-controls="nav-rates"
              aria-selected="false"
            >
              Rates
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-documents"
            role="tabpanel"
            aria-labelledby="nav-documents-tab"
            tabIndex="0"
          >
            <div className="docs">
              <h3>Upload Documents</h3>
              <div className="btn-documents">
                <button className="btn-req">Request Document</button>
                <button className="btnupload" onClick={() => setModal(true)}>
                  Upload Document
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-2 svg-icon"
                  >
                    <path
                      d="M8.83333 15.6667H3C2.77899 15.6667 2.56702 15.579 2.41074 15.4227C2.25446 15.2664 2.16667 15.0544 2.16667 14.8334V3.16675C2.16667 2.94573 2.25446 2.73377 2.41074 2.57749C2.56702 2.42121 2.77899 2.33341 3 2.33341H7.16667V4.83342C7.16667 5.49646 7.43006 6.13234 7.8989 6.60118C8.36774 7.07002 9.00362 7.33342 9.66667 7.33342H12.1667V9.00008C12.1667 9.2211 12.2545 9.43306 12.4107 9.58934C12.567 9.74562 12.779 9.83342 13 9.83342C13.221 9.83342 13.433 9.74562 13.5893 9.58934C13.7455 9.43306 13.8333 9.2211 13.8333 9.00008V6.50008C13.8333 6.50008 13.8333 6.50008 13.8333 6.45008C13.8247 6.37353 13.8079 6.29811 13.7833 6.22508V6.15008C13.7433 6.0644 13.6898 5.98564 13.625 5.91675L8.625 0.916748C8.55611 0.851928 8.47735 0.798482 8.39167 0.758415C8.36679 0.754881 8.34154 0.754881 8.31667 0.758415C8.23201 0.709866 8.13852 0.678702 8.04167 0.666748H3C2.33696 0.666748 1.70107 0.93014 1.23223 1.39898C0.763392 1.86782 0.5 2.50371 0.5 3.16675V14.8334C0.5 15.4965 0.763392 16.1323 1.23223 16.6012C1.70107 17.07 2.33696 17.3334 3 17.3334H8.83333C9.05435 17.3334 9.26631 17.2456 9.42259 17.0893C9.57887 16.9331 9.66667 16.7211 9.66667 16.5001C9.66667 16.2791 9.57887 16.0671 9.42259 15.9108C9.26631 15.7545 9.05435 15.6667 8.83333 15.6667ZM8.83333 3.50841L10.9917 5.66675H9.66667C9.44565 5.66675 9.23369 5.57895 9.07741 5.42267C8.92113 5.26639 8.83333 5.05443 8.83333 4.83342V3.50841ZM4.66667 5.66675C4.44565 5.66675 4.23369 5.75455 4.07741 5.91083C3.92113 6.06711 3.83333 6.27907 3.83333 6.50008C3.83333 6.7211 3.92113 6.93306 4.07741 7.08934C4.23369 7.24562 4.44565 7.33342 4.66667 7.33342H5.5C5.72101 7.33342 5.93297 7.24562 6.08926 7.08934C6.24554 6.93306 6.33333 6.7211 6.33333 6.50008C6.33333 6.27907 6.24554 6.06711 6.08926 5.91083C5.93297 5.75455 5.72101 5.66675 5.5 5.66675H4.66667ZM9.66667 9.00008H4.66667C4.44565 9.00008 4.23369 9.08788 4.07741 9.24416C3.92113 9.40044 3.83333 9.6124 3.83333 9.83342C3.83333 10.0544 3.92113 10.2664 4.07741 10.4227C4.23369 10.579 4.44565 10.6667 4.66667 10.6667H9.66667C9.88768 10.6667 10.0996 10.579 10.2559 10.4227C10.4122 10.2664 10.5 10.0544 10.5 9.83342C10.5 9.6124 10.4122 9.40044 10.2559 9.24416C10.0996 9.08788 9.88768 9.00008 9.66667 9.00008ZM15.2583 13.4084L13.5917 11.7417C13.5124 11.6659 13.419 11.6064 13.3167 11.5667C13.1138 11.4834 12.8862 11.4834 12.6833 11.5667C12.581 11.6064 12.4876 11.6659 12.4083 11.7417L10.7417 13.4084C10.5847 13.5653 10.4966 13.7782 10.4966 14.0001C10.4966 14.222 10.5847 14.4348 10.7417 14.5917C10.8986 14.7487 11.1114 14.8368 11.3333 14.8368C11.5553 14.8368 11.7681 14.7487 11.925 14.5917L12.1667 14.3417V16.5001C12.1667 16.7211 12.2545 16.9331 12.4107 17.0893C12.567 17.2456 12.779 17.3334 13 17.3334C13.221 17.3334 13.433 17.2456 13.5893 17.0893C13.7455 16.9331 13.8333 16.7211 13.8333 16.5001V14.3417L14.075 14.5917C14.1525 14.6699 14.2446 14.7319 14.3462 14.7742C14.4477 14.8165 14.5567 14.8382 14.6667 14.8382C14.7767 14.8382 14.8856 14.8165 14.9871 14.7742C15.0887 14.7319 15.1809 14.6699 15.2583 14.5917C15.3364 14.5143 15.3984 14.4221 15.4407 14.3206C15.4831 14.219 15.5048 14.1101 15.5048 14.0001C15.5048 13.8901 15.4831 13.7812 15.4407 13.6796C15.3984 13.5781 15.3364 13.4859 15.2583 13.4084ZM8 14.0001C8.22101 14.0001 8.43297 13.9123 8.58926 13.756C8.74554 13.5997 8.83333 13.3878 8.83333 13.1667C8.83333 12.9457 8.74554 12.7338 8.58926 12.5775C8.43297 12.4212 8.22101 12.3334 8 12.3334H4.66667C4.44565 12.3334 4.23369 12.4212 4.07741 12.5775C3.92113 12.7338 3.83333 12.9457 3.83333 13.1667C3.83333 13.3878 3.92113 13.5997 4.07741 13.756C4.23369 13.9123 4.44565 14.0001 4.66667 14.0001H8Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="nxp-form">
              <img src={svgImg} alt="" />
              <div className="form-Nxp">
                <h1>NXP Form</h1>
                <h2>NXP-Form.pdf</h2>
                <button>uploaded by you</button>
              </div>
              <RiDeleteBinLine className="del-Icon" />
            </div>
            <div className="nxp-form">
              <img src={svgImg} alt="" />
              <div className="form-Nxp">
                <h1>PFI Form</h1>
                <h2>Form.pdf</h2>
                <button>upload by admin</button>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-details"
            role="tabpanel"
            aria-labelledby="nav-details-tab"
            tabIndex="0"
          >
            Cargo details
          </div>
          <div
            className="tab-pane fade"
            id="nav-services"
            role="tabpanel"
            aria-labelledby="nav-services-tab"
            tabIndex="0"
          >
            hello
          </div>
          <div
            className="tab-pane fade"
            id="nav-rates"
            role="tabpanel"
            aria-labelledby="nav-rates-tab"
            tabIndex="0"
          >
            hello
          </div>
        </div>
      </div>
      <Modal show={modal} closeModal={closeModal} />
    </div>
  )
}

export default ShippingTab
