// import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { restaurantList, SWIGGY_API_URL } from "../constants";
// const filterdata = function (searchInput, restaurant) {
//   const data = filter((res) => {res.});
// };

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurant, setRestaurant] = useState([]);
  // const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    setRestaurant(json.data.cards[2].data.data.cards);
    // setFilteredRestaurant(json.data.cards[2].data.data.cards);
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button className="search-btn">search</button>
      </div>

      <div className="restraunt-list">
        {restaurant.map((res) => (
          <Link to={"/restaurant/" + res.data.id}>
            <RestaurantCard {...res.data} key={res.data.id} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
