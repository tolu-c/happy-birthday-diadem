import React from "react";
import CakeIcon from "@heroicons/react/solid/CakeIcon";
import GiftIcon from "@heroicons/react/solid/GiftIcon";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Icon } from "@iconify/react";

function Home() {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="capitalize font-pacifico text-gray-900 w-3/4 h-auto absolute top-50 left-50 transform -translate-y-1/2 -translate-x-1/2 flex flex-col">
        <p className="text-3xl md:text-6xl text-gray-900">
          <span>Happy 18th Birthdey to you diadem</span>{" "}
          <CakeIcon className="h-8 w-8 md:h-12 md:w-12 -mt-2 inline-block" />
        </p>
        <div
          className="flex rounded-full bg-purple-800 p-2 md:p-3 md:w-3/4 md:self-center md:-ml-12 text-gray-200 items-center justify-center mt-8 cursor-pointer hover:shadow-2xl"
          onClick={openModal}
        >
          <span className="capitalize text-lg md:text-4xl md:mr-4 mr-2">
            Open Gift
          </span>{" "}
          <GiftIcon className="h-8 w-8 md:h-12 md:w-12" />
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          onClose={closeModal}
          className="fixed inset-0 z-10 overflow-y-auto"
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md md:max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="mt-2">
                  <p className="text-xl md:text-3xl md:font-semibold text-gray-500 font-dancing font-bold">
                    I just wanna wish you a happy 18th birthday celebration from
                    the bottom of my heart, wanna let you know how much i love
                    you, how much annoying you are, how much i am proud of you
                    to have you as a sister, friend, playmate,how good of a
                    dancer, teacher, fried,woman that you are becoming. Happy
                    Birthday, Lots of Love...
                    <Icon
                      icon="si-glyph:feather"
                      className="text-gray-500 inline-block h-6 w-6 md:h-8 md:w-8 -mt-3 ml-1"
                    />
                  </p>
                  <div className="font-comforter font-bold text-purple-900 mt-4 md:mt-8">
                    <p className="text-xl md:text-2xl capitalize">With love,</p>
                    <p className="text-4xl md:text-5xl">Bossbaby.</p>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Home;

//  onClick={closeModal}
