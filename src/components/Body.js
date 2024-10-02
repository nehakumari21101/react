import { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import resList from "../utils/mockdata";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info);
    setListOfRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-inp"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button 
          className="search-btn" 
          onClick={()=>{
            console.log(searchText);
            setListOfRestaurant(listOfRestaurant.filter(res=>res.info.name.toLowerCase().includes(searchText.toLowerCase())));
          }}>
            Search
          </button>
        </div>

        <div>
          <button
            className="filter-btn"
            onClick={() => {
              listOfRestaurant = listOfRestaurant.filter(
                (res) => res.info.avgRating >= 4
              );
              // console.log(listOfRestaurant);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-containers">
        {listOfRestaurant.map((restaurant) => (
          <Link to={"/restaurants/"+restaurant.info.id}><RestaurantCard resData={restaurant} key={restaurant.info.id} /></Link>
        ))}
        {/* <RestaurantCard resData={resList}/> */}
      </div>
    </div>
  );
};

export default Body;
