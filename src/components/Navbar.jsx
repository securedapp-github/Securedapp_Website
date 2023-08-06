"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../images/logoblacktextsdlogowhite-1@2x.png";
import AuditModal from "./AuditModal";
const navigation = [
  { name: "Solidity Shield Scan", href: "/scan" },
  { name: "SecurePAD", href: "/SecurePAD" },
  { name: "Our Products", href: "/about-us", special: true },
  // { name: "Contact Us", href: "#" },
  { name: "Blog", href: "/blog" },
];

function Navbar({ onItemClick }) {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleItemClick = (index) => {
    setMobileMenuOpen(false); // Close mobile menu
    onItemClick(index); // Call the function passed from parent component
    console.log(index);
  };
  return (
    <div className="z-[23432423423] ">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8 border-b-2 border-gray-500"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 lg:ml-[30px]">
            <a href="/" className="-m-1.5 p-1.5">
              <div className="flex ml-3">
                <img
                  className="w-[267px] h-[81px] object-cover"
                  src={Logo}
                  alt=""
                />
              </div>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-10 items-center  lg:flex-1  lg:justify-end lg:mr-7">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[16px] font-normal text-center my-auto font-sans whitespace-nowrap leading-6 pt-0 w-max  text-gray-100"
                onClick={() => handleItemClick(index)}
              >
                {item.name}
                {/* <span className="flex flex-wrap px-4"> </span> */}
              </a>
            ))}
            <div className="text-sm font-semibold leading-6 text-gray-200">
              {/* <button className="mr-[35px] border-[2px] border-solid border-white bg-black shadow-[0px_0px_84px_#12d576] box-border z-50  rounded-full shadow-lg  hover:bg-[#640074] border py-2 px-[30px] whitespace-nowrap ">
                Request a quote
              </button> */}

              <button
                type="button"
                onClick={() => {
                  setShowModal(true);
                }}
                className=" top-[37px] left-[1250px] flex justify-center items-center rounded-full bg-black shadow-[0px_0px_84px_#12d576] box-border w-[175px] h-10 border-[2px] border-solid border-white"
              >
                <b className="">Request a quote</b>
              </button>
            </div>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 bg-black z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <div className="flex">
                  <img className="h-16 w-auto" src={Logo} alt="" />
                </div>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon
                  className="h-12 w-17 border rounded-xl p-2 border-white"
                  aria-hidden="true"
                />
              </button>
            </div>
            <div className="mt-7 flow-root">
              <div className="-my-6 divide-y gray-100/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item, index) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => handleItemClick(index)}
                      className="-mx-3 block rounded-lg px-7 py-2 text-base font-semibold font-sans leading-7 text-gray-100 hover:bg-gray-800"
                    >
                      <span> {item.name}</span>
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-800"
                  >
                    <button
                      onClick={() => {
                        setShowModal(true);
                      }}
                      className="border  rounded-xl	 border-white p-3 "
                    >
                      Request a quote
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      {showModal && <AuditModal onClose={handleModalClose} />}
    </div>
  );
}

export default Navbar;
