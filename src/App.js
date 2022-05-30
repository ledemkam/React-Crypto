import "./App.css";
import Tabell from "./Components/Tabell/Tabell";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [datacry, setDatacry] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setDatacry(res.data);
      });
  }, []);

  const filtereditem = datacry.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <main className="App">
      <h1>The Crypto Application</h1>
      <div className="input-contain">
        <input
          type="text"
          className="search"
          onChange={handleSearch}
          placeholder="...Search"
        />
      </div>
      <div className="tabellii">
        {filtereditem.map((item) => {
          return (
            <Tabell
              key={item.id}
              image={item.image}
              name={item.name}
              symbol={item.symbol}
              current_price={item.current_price}
              total_volume={item.total_volume}
              price_change_percentage_24h={item.price_change_percentage_24h}
              market_cap={item.market_cap}
            />
          );
        })}
      </div>
      <Tabell />
    </main>
  );
}

export default App;
