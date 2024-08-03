import React from 'react'
import avataaars from "../../assets/avataaars.svg"
import "./home.css"

export default function Home() {
  return (<>
    <div className='home' >

  <div className="containeer">
    <div className="imgg">
    <img className='avataaars' src={avataaars} />

    </div>
      
    <h1>START FRAMEWORK</h1>
    <div className="line2">
    <div class="line"></div>
    <i class="fas fa-star star"></i>
    <div class="line"></div>
    </div>
    <p>Graphic Artist - Web Designer - Illustrator
    </p>

  </div>
    </div>
    </>
 
  )
}

