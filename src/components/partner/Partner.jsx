import { Typography } from "@material-tailwind/react";

import {
  GiBoltShield,
  GiBurningDot,
  GiBison,
  GiBearHead,
  GiBoatHorizon,
} from "react-icons/gi";
export default function Example() {
  return (
    <div className=" py-8 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-500">
          In partner with
        </h2>
        <div className="flex flex-wrap justify-center gap-5 ">
          <div className=" flex items-center gap-5">
            <GiBoltShield className="w-10 h-10 text-gray-500" />
            <Typography variant="h3" className="text-gray-500 font-medium">
              Logoname
            </Typography>
          </div>

          <div className=" flex items-center gap-5">
            <GiBurningDot className="w-10 h-10 text-gray-500" />
            <Typography variant="h3" className="text-gray-500 font-medium">
              Logoname
            </Typography>
          </div>

          <div className=" flex items-center gap-5">
            <GiBison className="w-10 h-10 text-gray-500" />
            <Typography variant="h3" className="text-gray-500 font-medium">
              Logoname
            </Typography>
          </div>

          <div className=" flex items-center gap-5">
            <GiBearHead className="w-10 h-10 text-gray-500" />
            <Typography variant="h3" className="text-gray-500 font-medium">
              Logoname
            </Typography>
          </div>

          <div className=" flex items-center gap-5">
            <GiBoatHorizon className="w-10 h-10 text-gray-500" />
            <Typography variant="h3" className="text-gray-500 font-medium">
              Logoname
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
