import React,{useState} from "react";

function Item({ name, category }) {
  const[isInCart,setIsInCart]=useState(false)
  function handleInCart(){
    setIsInCart((isInCart)=> !isInCart)
  }

  const cartState = isInCart ? "in-cart" : ""

  return (
    <li className={cartState}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleInCart}>{isInCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
