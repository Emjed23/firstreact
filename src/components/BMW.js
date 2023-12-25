import React from 'react';

const BmwCard= () => {
    const bmwPrice='$174077.15'
    const bmwName='BMW 3 Series'
  return (
    <div>
      <div className="BMW">
      <img src="/BMW.avif" alt="BMW" />
        <a className='namecars'>{bmwName}</a>
        <a1 className="hbmw">The 3 series received an exterior and interior redesign for the 2023 model year. 
            Its exterior features new stylings, an updated bumper, and slimmer headlights.</a1>
        <p className="p">Price= '{bmwPrice}'</p>
      </div>
    </div>
  );
}
export default BmwCard;