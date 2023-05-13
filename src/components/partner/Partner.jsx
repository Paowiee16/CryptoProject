import { Typography } from "@material-tailwind/react";

import {
  GiBoltShield,
  GiBurningDot,
  GiBison,
  GiBearHead,
  GiBoatHorizon,
} from "react-icons/gi";
const partnerships = [
  {
    icon: GiBoltShield,
  },
  {
    icon: GiBurningDot,
  },
  {
    icon: GiBison,
  },
  {
    icon: GiBearHead,
  },
  {
    icon: GiBoatHorizon,
  },
];
export default function Example() {
  return (
    <div className=" py-8 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center md:text-lg font-semibold leading-8 text-gray-500  text-xs">
          In partner with
        </h2>
        <div className="flex flex-wrap justify-center gap-5  ">
          {partnerships.map((feature) => (
            <div key={feature.icon} className=" flex items-center gap-5 ">
              <feature.icon className="md:w-10 md:h-10 text-gray-500 w-8 h-8" />
              <Typography
                variant="h3"
                className="text-gray-500 font-medium  text-xs md:text-lg"
              >
                Logoname
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
