import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = ({ cart, setCart }) => {
  let total = 2.5;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].qty * cart[i].price;
  }
  return (
    <>
      <div>
        <button type="submit">Valider mon Panier</button>

        <div>
          {cart.map((ord, ido) => {
            return (
              <div key={ido}>
                <div className="counter">
                  <FontAwesomeIcon
                    icon="minus-circle"
                    onClick={() => {
                      const newItem = [...cart];
                      if (newItem[ido].qty === 1) {
                        newItem.splice(ido, 1);
                        setCart(newItem);
                      } else {
                        setCart(newItem);
                        ord.qty--;
                      }
                    }}
                  />
                  <p>{ord.qty}</p>
                  <FontAwesomeIcon
                    icon="plus-circle"
                    onClick={() => {
                      const newItem = [...cart];
                      setCart(newItem);
                      ord.qty++;
                    }}
                  />
                </div>

                <span>{ord.title}</span>
                <span>{ord.price}</span>
              </div>
            );
          })}
          <p>Frais de livraison : 2.50 €</p>
          <p>Total : {total.toFixed(2)} € </p>
        </div>
      </div>
    </>
  );
};

export default Cart;
