import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Carousel,
} from "@material-tailwind/react";

const reviews = [
  {
    name: "Candice Wu",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    works: "Works @ Somewhere",
    description:
      "I've been using FauxCoin Exchange for a few months now, and I must say, I'm impressed with their platform. The user interface is intuitive and easy to use, making it a great choice for both beginners and experienced traders. The fees are also very reasonable, and I appreciate the wide selection of cryptocurrencies available.",
  },
  {
    name: "Andrew Tan",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    works: "Works @ Somewhere",
    description:
      " I've tried a few different cryptocurrency exchanges, and FauxCoin Exchange is by far my favorite. The platform is easy to use, the fees are low, and the customer support is fantastic. I highly recommend giving them a try ",
  },
  {
    name: "Amanda Miere",
    image:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    works: "Works @ Somewhere",
    description:
      " As a beginner to cryptocurrency trading, I was hesitantto try an exchange. But FauxCoin Exchange made the process so easy and straightforward. Their user interface is intuitive, andtheir customer support team was always available to answer myquestions. I'm so glad I chose FauxCoin Exchange to start my cryptocurrency journey.",
  },
];
export default function Example() {
  return (
    <div className="bg-partner w-screen  h-screen flex flex-wrap  flex-col content-center justify-center contents-center text-center ">
      <h1 className="text-4xl font-extrabold  md:text-5xl xl:text-6xl text-white  ">
        Our Reviews
      </h1>
      <Carousel className="w-4/5  h-12/5  ">
        {reviews.map((item) => (
          <Card
            key={item.name}
            color="transparent"
            shadow={false}
            className="flex justify-center "
          >
            <CardBody className=" p-0">
              <Typography color="white">
                &quot; {item.description} &quot;
              </Typography>
            </CardBody>
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0  items-center gap-4 pt-0 pb-8 flex justify-center"
            >
              <img
                src={item.image}
                loading="lazy"
                width={50}
                height={50}
                className=" rounded-full overflow-hidden object-cover h-12"
              />
              <div className="flex justify-center items-center  gap-0.5 ">
                <div>
                  <Typography color="white" className="text-xl">
                    {item.name}
                  </Typography>
                  <Typography color="white">Works @ Somewhere</Typography>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </Carousel>
    </div>
  );
}
