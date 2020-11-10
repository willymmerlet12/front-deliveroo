import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import List from "./components/List";
import Cart from "./components/Cart";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faPlusCircle,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";

library.add(faStar, faPlusCircle, faMinusCircle);
function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [counters, setCounters] = useState([0]);
  const [cart, setCart] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://backend-deliveroo-w.herokuapp.com/"
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header data={data} isLoading={isLoading} />
      <List data={data} isLoading={isLoading} cart={cart} setCart={setCart} />

      <Cart
        counters={counters}
        setCounters={setCounters}
        cart={cart}
        setCart={setCart}
      />
    </>
  );
}

export default App;
