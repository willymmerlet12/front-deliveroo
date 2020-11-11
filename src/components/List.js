import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const List = ({ data, isLoading, cart, setCart }) => {
  return isLoading ? (
    <span>en cours de chargement</span>
  ) : (
    <>
      <div className="content">
        <div className="content-center">
          <div className="menu">
            <div className="menuItems">
              {data.categories.map((menu, id) => {
                return (
                  <>
                    <div className="titre">
                      <h3 key={id}>{menu.name}</h3>
                    </div>
                    <div className="menu-item-items">
                      {menu.meals.map((meals, id) => {
                        return (
                          <div>
                            <div
                              key={id}
                              className="menuItem"
                              onClick={() => {
                                const newCart = [...cart];
                                let isFound = false;
                                for (let i = 0; i < newCart.length; i++) {
                                  if (newCart[i].id === meals.id) {
                                    newCart[i].qty++;
                                    isFound = true;
                                    break;
                                  }
                                }
                                if (isFound === false) {
                                  newCart.push({
                                    id: meals.id,
                                    title: meals.title,
                                    price: meals.price,
                                    qty: 1,
                                  });
                                }
                                setCart(newCart);
                              }}
                            >
                              <div className="menuItem-card">
                                <div className="menuitem-texts">
                                  <div className="tit">
                                    <p className="tit" key={id}>
                                      {meals.title}
                                    </p>
                                  </div>
                                  <div className="des">
                                    <p key={id}>
                                      {meals.description.slice(0, 60)}
                                    </p>
                                  </div>
                                  <div className="menu-info ">
                                    <p>
                                      {meals.price}€
                                      {meals.popular && (
                                        <span className="popular">
                                          <FontAwesomeIcon icon="star" />
                                          <span>Populaire</span>
                                        </span>
                                      )}
                                    </p>
                                  </div>
                                </div>
                                <div className="menuitem-pic">
                                  {meals.picture && (
                                    <img src={meals.picture} alt="pic menu" />
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
