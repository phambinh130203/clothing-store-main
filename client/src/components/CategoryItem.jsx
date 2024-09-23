import React from "react";


const CategoryItem = (props) => {
  return (
    <div className="cursor-pointer">
    <div className="CategoryItem">
      <img 
        className="w-64 h-80 rounded-xl overflow-hidden"
        src={props.image} alt=""
      />
      <p className="font-bold text-xl text-#3C4242 mt-4">{props.name}</p>
      <div className="CategoryItem-price">
        <div className="CategoryItem-price-new">
          {props.new_price}$
        </div>
        <div className="CategoryItem-price-old">
          {props.old_price}$
        </div>

      </div>
    </div>
    </div>
  );
};

export default CategoryItem;
