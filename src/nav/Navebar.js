import React from 'react'
import "./Navebar.css"

function Navebar  () {
  return (
    <div className='navbar'>
       <div className='search'>
       <input type={"search"} placeholder="Search here.."/>
       </div>
       <div className='home'>
       <a href=''>home</a>
        <a href=''>home</a>
        <a href=''>home</a>
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