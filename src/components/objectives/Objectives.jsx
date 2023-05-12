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
      <div className=" mx-auto  items-center justify-items-center gap-4 w-3/5 flex flex-wrap ">
        {/* {data.map((item) => (
          <div
            key={item.name}
            className=" p-5 bg-blue-900  w-40 h-80 justify-items-center items-center"
          >
            <div className="flex justify-center text-center ">
              <Typography
                color="white"
                variant="h2"
                className="font-bold font-montserrat"
              >
                {item.market_cap_rank}
              </Typography>
            </div>
            <div className="flex justify-center text-center justify-items-center">
              <img src={item.image} className="w-12 h-12" />
            </div>
            <div>
              <Typography color="white" className="font-bold font-montserrat">
                {item.name}
              </Typography>

              <Typography color="white" className="font-medium font-montserrat">
                <span>&#8369;</span>
                {item.current_price.toLocaleString()}
              </Typography>
            </div>
            <div className="flex justify-center text-center">
              {item.price_change_percentage_24h > 0 ? (
                <span>
                  <IoTrendingDown color="red" size={25} />
                  <Typography
                    color="red"
                    className="flex items-center gap-2 font-bold "
                  >
                    {item.price_change_percentage_24h.toFixed(2)}{" "}
                  </Typography>
                </span>
              ) : (
                <span>
                  <IoTrendingUp color="yellowgreen" size={25} />
                  <Typography
                    color="light-green"
                    className="flex items-center gap-2 font-bold "
                  >
                    {item.price_change_percentage_24h.toFixed(2)}{" "}
                  </Typography>
                </span>
              )}
            </div>
          </div>
        ))} */}
        <table className="table-auto w-full rounded-lg text-white bg-blue-gray-900 text-center p-5 overflow-auto min-w-fit">
          <tr>
            {head.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
          {data.map((item) => (
            <tr key={item.name} className="text-center">
              <td className="p-7">{item.market_cap_rank}</td>
              <td>
                <img src={item.image} className="w-12 h-12" />
              </td>
              <td>{item.name}</td>
              <td>
                {" "}
                <span>&#8369;</span> {item.current_price.toLocaleString()}
              </td>
              <td>
                {item.price_change_percentage_24h > 0 ? (
                  <span className="inline-flex gap-4">
                    <IoTrendingDown color="red" size={25} />
                    <Typography color="red" className=" gap-2 font-bold ">
                      {item.price_change_percentage_24h.toFixed(2)}{" "}
                    </Typography>
                  </span>
                ) : (
                  <span className="inline-flex gap-4">
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
