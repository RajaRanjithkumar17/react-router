import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import "./notice/Notification.css"

function Notification() {
  // const nav = useNavigate()
  // const navigate=()=>{
  //   nav("/timeline")
  return (
    <div className='notice'>
      <div className='request'>
        <button>back</button>
      {/* <button onClick={()=>navigate()}>timeline</button> */}
        <h2>Requests</h2>
        <h4>ranjith</h4>
        <h4>ramm</h4>
        <h4>mani</h4>
        <br/>
      </div>
      <div className='contact'>
      <h2>contacts</h2>
        <h4>ranjith</h4>
        <h4>ramm</h4>
        <h4>mani</h4>

      </div>

    </div>
  )
  }


export default Notification