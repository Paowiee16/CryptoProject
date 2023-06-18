import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import axios from "axios";
import { IoTrendingDown, IoTrendingUp } from "react-icons/io5";
import "./objectives.css";

export default function Example() {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&order=market_cap_desc&per_page=5&page=1&sparkline=false&locale=en://api.coingecko.com/api/v3/coins/markets?vs_currency=PHP&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en";

  const [data, setData] = useState(null);
  const head = ["Rank", "", "Name", "Market Cap", "Price Change 24hr"];

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(data);

  if (!data) return null;
  return (
    <div className="bg-partner w-screen h-auto  contents-center text-center  ">
      <div className=" inline-block align-text-bottom mb-10 ">
        <h1 className="text-4xl font-extrabold  md:text-5xl xl:text-6xl text-white  ">
          Market Update
        </h1>
      </div>
      <div className=" mx-auto  gap-4 w-3/5 flex justify-center ">
        <table className="table-auto rounded-lg text-white bg-blue-900 text-center  overflow-auto ">
          <tr>
            {head.map((item) => (
              <th key={item} className="lg:p-7   p-2  text-white">
                {item}
              </th>
            ))}
          </tr>
          {data.map((item) => (
            <tr key={item.name} className="text-center ">
              <td className="p-7">{item.market_cap_rank}</td>
              <td>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-8 h-8 collapse md:visible lg:w-12 lg:h-12"
                />
              </td>
              <td>
                <Typography className="font-monsterrat text-sm md:text-base">
                  {item.name}
                </Typography>
              </td>
              <td className="p-5 w-8">
                <Typography className="font-monsterrat font-ligth text-xs text-justify md:text-base">
                  <span>&#8369;{item.current_price.toLocaleString()}</span>
                </Typography>
              </td>
              <td className="p-5 md:text-base">
                {item.price_change_percentage_24h < 0 ? (
                  <span className="inline-flex gap-2">
                    <IoTrendingDown color="red" size={25} />
                    <Typography color="red" className=" gap-2 font-bold ">
                      {item.price_change_percentage_24h.toFixed(2)}
                    </Typography>
                  </span>
                ) : (
                  <span className="inline-flex gap-1">
                    <IoTrendingUp color="yellowgreen" size={25} />
                    <Typography
                      color="light-green"
                      className="gap-2 font-bold "
                    >
                      {item.price_change_percentage_24h.toFixed(2)}{" "}
                    </Typography>
                  </span>
                )}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
