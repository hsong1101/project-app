/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";

const genres = [
  { id: 1, name: "action" },
  { id: 2, name: "adventure" },
  { id: 3, name: "comedy" },
  { id: 4, name: "crime" },
  { id: 5, name: "documentary" },
  { id: 6, name: "drama" },
  { id: 7, name: "horror" },
  { id: 8, name: "mystery" },
  { id: 9, name: "romance" },
  { id: 10, name: "thriller" },
  { id: 11, name: "other" },
];

export default function Form() {
  const [open, setOpen] = useState(false);

  function predict(e) {
    e.preventDefault();
    setOpen(true)
  }

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6">
                  <div>
                    
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        Sike!
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Consequatur amet labore.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Will be loaded soooooooon
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <form className="space-y-8 divide-y divide-gray-200">
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div>
            <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="about"
                  className="block text-md font-bold text-gray-700 sm:mt-px sm:pt-2"
                >
                  Synopsis
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={10}
                    placeholder="Write a few sentences about a movie you would like to produce"
                    className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    defaultValue={""}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="username"
                  className="block text-md font-bold text-gray-700 sm:mt-px sm:pt-2"
                >
                  Genre(s)
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-lg flex rounded-md">
                    <fieldset className="w-full">
                      <div className="mt-4 border-gray-200 divide-y divide-gray-200">
                        {genres.map((person, personIdx) => (
                          <div
                            key={personIdx}
                            className="relative flex items-start py-3"
                          >
                            <div className="first-letter:uppercase min-w-0 flex-1 text-sm">
                              <label
                                htmlFor={`person-${person.id}`}
                                className="font-medium text-gray-700 select-none"
                              >
                                {person.name}
                              </label>
                            </div>
                            <div className="ml-3 flex items-center h-5">
                              <input
                                id={`person-${person.id}`}
                                name={`person-${person.id}`}
                                type="checkbox"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="mt-4 text-[12px] text-gray-500 text-right">
                        These are top 10 most used genres. If not present,
                        select &rdquo;Other&rdquo;
                      </p>
                    </fieldset>
                  </div>
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="runtime"
                  className="block text-md font-bold text-gray-700 sm:mt-px sm:pt-2"
                >
                  Runtime
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-lg flex rounded-md shadow-sm">
                    <input
                      type="number"
                      name="runtime"
                      id="runtime"
                      min="0"
                      placeholder="120"
                      className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-md sm:text-sm border-gray-300 appearance-none"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Enter estimated total runtime in minutes (no decimal)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Reset
            </button>
            <button
              type="submit"
              onClick={(e) => predict(e)}
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Predict
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
