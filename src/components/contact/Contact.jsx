import "./contact.css";
export default function Example() {
  return (
    <div className=" w-screen overflow-hidden contact py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-wrap justify-center ">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Subscribe to our newsletter.
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
          velit quis. Duis tempor incididunt dolore.
        </p>
        <div className="mt-6 w-screen max-w-md gap-x-4  flex justify-center align-middle p-5 ">
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="flex-none rounded-md  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 0 bg-primaryTxtColor "
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
}
