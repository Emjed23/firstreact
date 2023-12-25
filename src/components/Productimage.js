import React from 'react'
const Productimage = () => {
  return (
    <div>
        <img src='/Audi.jpg' alt="Audi"/>
    </div>
  )
}

export default Productimage


// if img in public folder :
{/* <img src='/Audi.jpg' alt="Audi"/> */}

// else 
//  import {Audi} from "./.../Audi.jpg"
{/* <img src={Audi} alt="Audi"/> */}


