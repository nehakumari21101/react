import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const[showItems, setShowItems] = useState(false);
    // console.log("data = ", data)

    const handleClick = () =>{
      setShowItems(!showItems);
    }
  return (
    <div>
      <div>
        <div className="w-7/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer" >
          <div className="  flex justify-between" onClick={handleClick}>
            <span className="font-bold">
              {data.title} ({data.itemCards.length})
            </span>
            <span >⬇</span>

          </div>
          {showItems && <ItemList items={data.itemCards}/>}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
