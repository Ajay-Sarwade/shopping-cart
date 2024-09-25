import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../slice/cartSlice";

const Product = (props) => {
  const dispatch = useDispatch();
  const { id, price, image, title, btn } = props;

  function handleItems(e) {
    if (btn == "add to cart") {
      dispatch(addToCart({ id: id, price: price, title: title, image: image }));
    } else {
      dispatch(removeFromCart({ id: id }));
    }
  }

  return (
    <div className="singleProduct">
      <img src={image} />
      <span>{title}</span>
      <br></br>
      <span>Price : {price} $</span> <br></br>
      <button
        onClick={(e) => {
          handleItems(e);
        }}
      >
        {btn}
      </button>
    </div>
  );
};

export default Product;
