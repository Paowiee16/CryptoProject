import { Typography } from "@material-tailwind/react";
import { BsDiscord, BsTwitter } from "react-icons/bs";
const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
];
import "./footer.css";
import Contact from "../../components/contact/Contact";
const currentYear = new Date().getFullYear();

export default function Example() {
  return (
    <footer className=" w-screen ">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography className="mb-6 font-montserrat text-primaryTxtColor">
            FAUXCOIN EXCHANGE
          </Typography>
          <div className="grid grid-cols-2 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <div key={title}>
                <Typography
                  variant="small"
                  color="white"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <Typography
                    key={link}
                    as="a"
                    href="#"
                    color="white"
                    className="py-1.5 font-normal transition-colors hover:text-primaryTxtColor"
                  >
                    {link}
                  </Typography>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            color="white"
            className="mb-4 text-center font-normal  md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a
              href="https://material-tailwind.com/"
              className="text-primaryTxtColor"
            >
              FauxCoin Exchange
            </a>
            . All Rights Reserved.
          </Typography>
          <div className="flex gap-4 sm:justify-center">
            <Typography
              as="a"
              href="#"
              color="white"
              className="opacity-80 transition-opacity hover:text-primaryTxtColor"
            >
              <BsDiscord />
            </Typography>

            <Typography
              as="a"
              href="#"
              color="white"
              className="opacity-80 transition-opacity hover:text-primaryTxtColor"
            >
              <BsTwitter />
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
