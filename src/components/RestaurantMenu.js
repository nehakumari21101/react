import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  // console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.59080&lng=85.13480&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();

    // console.log(json.data);
    setResInfo(json.data);

    // console.log(json.data);

    //     const { name, cuisines, costForTwoMessage } =
    // resInfo?.cards[2].card?.card?.info;
  };

  if (resInfo === null) return <h2>Loading....</h2>;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2].card?.card?.info;

  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

    // console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards);

    // console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2]?.card?.card?.["@type"]
    // );

    const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    // console.log(categories);

  return (
    <div className="text-center border border-solid border-red">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory data={category?.card?.card} key={index}/>
      ))}
    </div>
  );
};

export default RestaurantMenu;
