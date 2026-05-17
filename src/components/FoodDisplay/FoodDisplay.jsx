import { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category, searchQuery = "" }) => {
  const { food_list } = useContext(StoreContext);
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredFood = food_list.filter((item) => {
    const matchesCategory = category === "All" || item.category === category;
    const matchesSearch =
      !normalizedQuery ||
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.category.toLowerCase().includes(normalizedQuery) ||
      item.description.toLowerCase().includes(normalizedQuery);

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="food-display" id="food-display">
      <div className="food-display-heading">
        <h2>Top dishes near you</h2>
        <p>
          {filteredFood.length} {filteredFood.length === 1 ? "dish" : "dishes"} available
        </p>
      </div>
      <div className="food-display-list">
        {filteredFood.map((item) => (
          <FoodItem
            key={item._id}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
      {filteredFood.length === 0 && (
        <div className="food-display-empty">
          <h3>No dishes found</h3>
          <p>Try a different search term or choose another menu category.</p>
        </div>
      )}
    </section>
  );
};

export default FoodDisplay;
