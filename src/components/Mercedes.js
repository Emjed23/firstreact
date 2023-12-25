import React from 'react'
export const Mercedes = () => {
    const MercedesPrice='196054,7$ '
    const MercedesName='AMG GT 53 4-Door Coupe'
  return (
    <div>
      <div className="BMW">
      <img src="https://cdn.jdpower.com/Models/320x240/2023-Mercedes-Benz-AMGGT.jpg" alt="BMW" />
        <a className='namecars'>{MercedesName}</a>
        <a1 className="mercedes">la Mercedes-AMG GT 63 S E-Performance accélère de 0 à 100 km/h en 2,9 secondes, 
        tandis que l'EQS 53 réclame 3,4 secondes. </a1>
        <p className="p">Price= '{MercedesPrice}'</p>
      </div>
    </div>
  );
}
export default Mercedes;