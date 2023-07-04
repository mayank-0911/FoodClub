import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, SWIGGY_MENU_API_URL } from "../constants";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [restaurantMenu, setRestaurantMenu] = useState([]);

  const [resDetails, setResDetails] = useState({});

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(SWIGGY_MENU_API_URL + resId);
    const json = await data.json();
    console.log(json);
    setRestaurantMenu(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards
    );
    setResDetails(json.data.cards[0].card.card.info);
  }
  return (
    <div>
      <h1>{resDetails.name}</h1>
      <h2>Restaurant Id:{resId}</h2>
      <img src={IMG_CDN_URL + resDetails.cloudinaryImageId} />
      <p>Avg Rating:{resDetails.avgRating}</p>
      <ul>
        {restaurantMenu.map((menu) => (
          <li>{menu.card.card.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
