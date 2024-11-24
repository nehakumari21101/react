import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
    // console.log("data = ", data)
  return (
    <div>
      <div>
        <div className="w-7/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
          <div className="  flex justify-between">
            <span className="font-bold">
              {data.title} ({data.itemCards.length})
            </span>
            <span>⬇</span>

          </div>
          <ItemList items={data.itemCards
}/>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
