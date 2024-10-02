import { CDN_URL } from "./utils/constants";

const RestaurantCard = (props) => {
    // console.log(props);
    // console.log(props.resData.card.card.info.avgRating);
  return (
    <div className="res-card">
      <img
        src={CDN_URL+props.resData.info.cloudinaryImageId}
        alt="res-card"
        className="card-img"
      />
      <div className="card-content">
        <h2>{props.resData.info.name}</h2>
        <h3>{props.resData.info.costForTwo}</h3>
        <h3>{props.resData.info.avgRating}stars</h3>
        <span>{props.resData.info.cuisines.join(", ")}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;