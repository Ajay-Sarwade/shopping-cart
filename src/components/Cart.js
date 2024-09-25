import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);

  return (
    <div>
      Cart Items
      <div className="products">
        {items?.length > 0 &&
          items.map((item) => {
            return (
              <Product
                id={item.id}
                title={item?.title}
                image={item.image}
                price={item.price}
                btn={"remove from cart"}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Cart;
