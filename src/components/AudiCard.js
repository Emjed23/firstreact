import React from "react";

const AudiCard = () => {
  const name = "Audi Rs e-tron gt";
  const price ="147691.30$";
  
  return (
    <div>
      <div className="Audi">
      <img src='/Audi.jpg' alt="Audi"/> 
        <a  className='namecars'>{name}</a>
        <a1 className="haudi"> la e-tron GT
             dispose d'une puissance maximale de 
             522 chevaux avec le mode « Boost »</a1>
        <p className="p">Price='{price}'</p>
        </div>
    </div>
  );
};
export default AudiCard;
