import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode]=useState(false)
  function handleModeChange(){
    setIsDarkMode((isDarkMode) => !isDarkMode)
  }
  const appClass = isDarkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleModeChange}>{isDarkMode ?"Dark" :"Light"} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
    
  );
}

export default App;
