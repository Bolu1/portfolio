import React from "react";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <div id="contact">
      <div className="flex w-full h-full py-5 text-white bg-black lg:hidden">
        <div className="w-full h-full px-3 pt-8">
          <div className="flex flex-col items-center justify-center w-full space-y-4">
            <h1 className="text-3xl large-texts">Get in touch!</h1>
            <p className="text-lg text-center">
              I’m currently open to joining a new team of creative developers.
              Also, if you have a question, proposal, idea or just want to say
              hi, Go ahead.
            </p>
          </div>
          <div className="w-full h-40 mt-10 space-y-3">
            <div className="flex items-center w-full space-x-4 text-lg">
              <IoLocationSharp className="w-6 h-6" />
              <h1>Kwara, Nigeria</h1>
            </div>
            <div className="flex items-center w-full space-x-4 text-lg">
              <AiFillPhone className="w-6 h-6" />
              <h1>+234 810 555 1713</h1>
            </div>
            <div className="flex items-center w-full space-x-4 text-lg">
              <AiFillMail className="w-6 h-6" />
              <h1>boluadetifa@gmail.com</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[85rem] h-full py-5 mx-auto  text-white bg-black hidden lg:flex">
        <div className="w-full h-full px-3 pt-8">
          <div className="flex flex-col items-center justify-center w-full space-y-4">
            <h1 className="text-3xl large-texts">Get in touch!</h1>
            <p className="text-lg text-center">
              I’m currently open to joining a new team of creative developers.
              Also, if you have a question, proposal, idea or just want to say
              hi, Go ahead.
            </p>
          </div>
          <div className="w-full h-40 space-y-3 max-w-[65rem] mx-auto  mt-10">
            <div className="flex items-center w-full space-x-4 text-lg">
              <IoLocationSharp className="w-6 h-6" />
              <h1>Kwara, Nigeria</h1>
            </div>
            <div className="flex items-center w-full space-x-4 text-lg">
              <AiFillPhone className="w-6 h-6" />
              <h1>+234 810 555 1713</h1>
            </div>
            <div className="flex items-center w-full space-x-4 text-lg">
              <AiFillMail className="w-6 h-6" />
              <h1>boluadetifa@gmail.com</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
