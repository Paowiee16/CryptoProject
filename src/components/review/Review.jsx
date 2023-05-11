import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Carousel,
} from "@material-tailwind/react";

export default function Example() {
  return (
    <div className="bg-partner w-screen  h-screen flex flex-wrap justify-center contents-center ">
      <h1 className="text-4xl font-extrabold  md:text-5xl xl:text-6xl text-white align-text-bottom h-0 mt-32 ">
        Our Reviews
      </h1>
      <Carousel className="w-4/5  h-2/5 ">
        <div className="flex justify-center items-center  content-center p-24 h-2/5">
          <Card
            color="transparent"
            shadow={false}
            className="    flex justify-center "
          >
            <CardBody className=" p-0">
              <Typography color="white">
                &quot; I've been using FauxCoin Exchange for a few months now,
                and I must say, I'm impressed with their platform. The user
                interface is intuitive and easy to use, making it a great choice
                for both beginners and experienced traders. The fees are also
                very reasonable, and I appreciate the wide selection of
                cryptocurrencies available. &quot;
              </Typography>
            </CardBody>
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0  items-center gap-4 pt-0 pb-8 flex justify-center"
            >
              <Avatar
                size="lg"
                variant="circular"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt="candice wu"
              />
              <div className="flex justify-center items-center  gap-0.5 ">
                <div>
                  <Typography variant="h5" color="white">
                    Candice Wu
                  </Typography>
                  <Typography color="white">Works @ Somewhere</Typography>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        <div className="flex justify-center items-center content-center p-24 h-2/5">
          <Card
            color="transparent"
            shadow={false}
            className="  max-w-[56rem] border-5 flex justify-center "
          >
            <h1 className=" mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white"></h1>

            <CardBody className="mb-10 p-0">
              <Typography color="white">
                &quot; I've tried a few different cryptocurrency exchanges, and
                FauxCoin Exchange is by far my favorite. The platform is easy to
                use, the fees are low, and the customer support is fantastic. I
                highly recommend giving them a try &quot;
              </Typography>
            </CardBody>
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0  items-center gap-4 pt-0 pb-8 flex justify-center"
            >
              <Avatar
                size="lg"
                variant="circular"
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="candice wu"
              />
              <div className="flex justify-center items-center  gap-0.5 ">
                <div>
                  <Typography variant="h5" color="white">
                    Andrew Tan
                  </Typography>
                  <Typography color="white">AlsoWorks @ Somewhere</Typography>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        <div className="flex justify-center items-center content-center p-24 h-2/5">
          <Card
            color="transparent"
            shadow={false}
            className="  max-w-[56rem] border-5 flex justify-center "
          >
            <CardBody className="mb-10 p-0">
              <Typography color="white">
                &quot; As a beginner to cryptocurrency trading, I was hesitant
                to try an exchange. But FauxCoin Exchange made the process so
                easy and straightforward. Their user interface is intuitive, and
                their customer support team was always available to answer my
                questions. I'm so glad I chose FauxCoin Exchange to start my
                cryptocurrency journey. &quot;
              </Typography>
            </CardBody>
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0  items-center gap-4 pt-0 pb-8 flex justify-center"
            >
              <Avatar
                size="lg"
                variant="circular"
                src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              />
              <div className="flex justify-center items-center  gap-0.5 ">
                <div>
                  <Typography variant="h5" color="white">
                    Amanda Miere
                  </Typography>
                  <Typography color="white">Works @ Home</Typography>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </Carousel>
    </div>
  );
}
