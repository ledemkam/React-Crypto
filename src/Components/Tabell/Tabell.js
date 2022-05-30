import React from "react";
import "./Tabell.css";

const Tabell = ({
  image,
  name,
  symbol,
  current_price,
  total_volume,
  price_change_percentage_24h,
  market_cap,
}) => {
  return (
    <div className="tabell">
      <div className="contain-tabell">
        <table>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td>
              {" "}
              <img src={image} alt="crypto" />
            </td>
            <td>{name}</td>
            <td>{symbol}</td>
            <td>€{current_price}</td>
            <td>€{total_volume}</td>
            {price_change_percentage_24h > 0 ? (
              <td className="red">{price_change_percentage_24h}</td>
            ) : (
              <td className="green">{price_change_percentage_24h}</td>
            )}
            <td>Mkt Cap: €{market_cap}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Tabell;
