import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
import Filter from "./Filter";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const appClass = darkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <Header onDarkModeClick={toggleDarkMode} />
      <ShoppingList items={itemData} selectedCategory={selectedCategory} />
      <Filter onCategoryChange={handleCategoryChange} />
    </div>
  );
}

export default App;
