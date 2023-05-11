import React, { useState, useEffect } from "react";
import {
  Card,
  Typography,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import axios from "axios";

export default function Example() {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&order=market_cap_desc&per_page=5&page=1&sparkline=false&locale=en://api.coingecko.com/api/v3/coins/markets?vs_currency=PHP&order=market_cap_desc&per_page=5&page=1&sparkline=false&locale=en";

  const [data, setData] = useState(null);

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
    <div className="bg-partner w-screen  h-screen flex flex-wrap justify-center contents-center ">
      <div className="flex flex-wrap gap-4 ">
        {data.map((item) => (
          <Card key={item.name} className="flex-row w-full max-w-[48rem]">
            <CardHeader
              shadow={false}
              floated={false}
              className="w-2/5 shrink-0 m-0 rounded-r-none"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h6" color="blue" className="uppercase mb-4">
                {item.name}
              </Typography>
              <Typography variant="h4" color="blue-gray" className="mb-2">
                {item.name}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
