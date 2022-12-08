import React from "react";

const CarItem = (props) => {
  const { uid,name,image,price,created_at} = props.item;
  return (
    <div className="car__item">
      <div className="car__item-top">

      </div>

      <div className="car__img">
        <img src={image} width='100%' height='200px' alt="" />
      </div>

      <div className="car__item-tile">
          <h3>{name}</h3>
          
        </div>

      <div className="car__item-bottom">
      
        

        <p className="car__rent">{price} Rs/-</p>
      </div>
    </div>
  );
};

export default CarItem;
