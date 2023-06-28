import React from 'react'
import  ReactDOM  from 'react-dom'
const Portal = () => {
    return ReactDOM.createPortal(
   
      <h1>portal demo</h1>,
      document.getElementById('portal-root')
  
  )
 
}

export default Portal
