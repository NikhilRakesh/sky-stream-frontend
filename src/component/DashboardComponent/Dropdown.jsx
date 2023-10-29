import React from 'react'
import { PiSignOutBold } from 'react-icons/pi'
import "./Dropdown.css"

const Dropdown = () => {
    
  return (
    
    <label className="popup z-50">
    <input type="checkbox" />
    <div className="burger" tabIndex={0}>
    <span />
      <span />
      <span />
    </div>
    <nav className="popup-window">
      <legend>Actions</legend>
      <ul>
        <hr />
        <li>
          <button>
          {/* <svg
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              height={14}
              width={14}
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y2={18} x2={6} y1={6} x1={18} />
              <line y2={18} x2={18} y1={6} x1={6} />
            </svg> */}
            <PiSignOutBold className='text-red' />
            <span>Sign Out</span>
          </button>
        </li>
      </ul>
    </nav>
  </label>
  

    
  )
}

export default Dropdown
