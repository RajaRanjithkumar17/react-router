import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import "./nav/Navebar.css"

function Navebar  () {
  const navi = useNavigate()
  const navigat=()=>{
    navi("notification")
  }
  return (
    <div className='navbar'>
       <div className='search'>
       <input type={"search"} placeholder="Search here.."/>
       </div>
       <div className='home'>
        <Link to="options">options</Link>
        <button onClick={()=>navigat()}>notification</button>
      
       </div>
       <div className='setting'>
       <a href=''>home</a>
        <a href=''>home</a>
        <a href=''>home</a>
       </div>
    </div>
  )
}

export default Navebar