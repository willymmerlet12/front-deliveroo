import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div>
        <button type="submit">Valider mon Panier</button>

        <div>
          {cart.map((ord, id) => {
            return (
              <div key={id}>
                <div className="counter">
                  <FontAwesomeIcon
                    icon="minus-circle"
                    onClick={() => {
                      const newItem = [...cart];
                      setCart(newItem);

                      ord.qty--;
                    }}
                  />
                  <p>{ord.qty}</p>
                  <FontAwesomeIcon
                    icon="plus-circle"
                    onClick={() => {
                      const newItem = [...cart];
                      setCart(newItem);
                    }}
                  />
                </div>

                <span>{ord.title}</span>
                <span>{ord.price}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cart;
