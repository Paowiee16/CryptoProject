import {
  HiOutlinePhoneArrowDownLeft,
  HiOutlineSparkles,
  HiOutlineBanknotes,
  HiOutlineLockClosed,
} from "react-icons/hi2";
import "./chooseus.css";
const features = [
  {
    name: "Secure and reliable",
    description:
      " We use multi-factor authentication, encryption, and other security protocols to ensure that your account is safe and secure.",
    icon: HiOutlineLockClosed,
  },
  {
    name: "Easy to use",
    description:
      "Our intuitive platform is designed to make the trading process as seamless as possible.",
    icon: HiOutlineSparkles,
  },
  {
    name: "Low fees",
    description:
      "auxCoin Exchange offers some of the lowest fees in the industry.",
    icon: HiOutlineBanknotes,
  },
  {
    name: "Excellent customer support",
    description:
      "Our dedicated customer support team is available 24/7 to answer your questions and help you with any issues you may encounter.",
    icon: HiOutlinePhoneArrowDownLeft,
  },
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32 chooseus h-auto w-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why we are the best in the market?
          </p>
          <p className="mt-6 text-lg leading-8 text-white">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-primaryTxtColor">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primaryTxtColor">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
