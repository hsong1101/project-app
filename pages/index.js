import Form from "../components/Form";
/* This example requires Tailwind CSS v2.0+ */
export default function Home() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-1 text-xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-4xl">
            Predict the Rotten Tomatoes' Rating
          </p>
          <p className="max-w-xl mt-8 mx-auto text-md text-gray-500">
            1 Star : ~ 20 %
          </p>
          <p className="max-w-xl mt-3 mx-auto text-md text-gray-500">
            2 Star : 21 ~ 40 %
          </p>
          <p className="max-w-xl mt-3 mx-auto text-md text-gray-500">
            3 Star : 41 ~ 60 %
          </p>
          <p className="max-w-xl mt-3 mx-auto text-md text-gray-500">
            4 Star : 61 ~ 80 %
          </p>
          <p className="max-w-xl mt-3 mx-auto text-md text-gray-500">
            5 Star : 80 ~ %
          </p>
        </div>
        <Form />
      </div>
    </div>
  );
}
