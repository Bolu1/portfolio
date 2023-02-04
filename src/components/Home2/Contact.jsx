import React from "react";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <div>
      <div className="w-full h-full py-5 text-white bg-black flex lg:hidden">
        <div className="w-full h-full px-3 pt-8">
          <div className="w-full flex flex-col items-center space-y-4 justify-center">
            <h1 className="text-3xl large-texts">Get in touch!</h1>
            <p className="text-center text-lg">
              I’m currently open to joining a new team of creative developers.
              Also, if you have a question, proposal, idea or just want to say
              hi, Go ahead.
            </p>
          </div>
          <div className="w-full h-40 space-y-3  mt-10">
            <div className="w-full items-center text-lg flex space-x-4">
              <IoLocationSharp className="w-6 h-6" />
              <h1>Kwara, Nigeria</h1>
            </div>
            <div className="w-full items-center text-lg flex space-x-4">
              <AiFillPhone className="w-6 h-6" />
              <h1>+234 810 555 1713</h1>
            </div>
            <div className="w-full items-center text-lg flex space-x-4">
              <AiFillMail className="w-6 h-6" />
              <h1>boluadetifa@gmail.com</h1>
            </div>
          </div>
          <form className="w-full space-y-7 ">
            <div className="w-full flex flex-col">
              <h1 className="text-xl">Name</h1>
              <input
                type="text"
                className="border-b py-2 px-3 white outline-none bg-transparent"
              />
            </div>
            <div className="w-full flex flex-col">
              <h1 className="text-xl">Email Address</h1>
              <input
                type="email"
                className="border-b py-2 px-3 white outline-none bg-transparent"
              />
            </div>
            <div className="w-full flex flex-col">
              <h1 className="text-xl">Subject</h1>
              <input
                type="text"
                className="border-b py-2 px-3 white outline-none bg-transparent"
              />
            </div>
            <div className="w-full flex flex-col">
              <h1 className="text-xl">Message</h1>
              <textarea className="border-b resize-none py-2 px-3 white outline-none bg-transparent"></textarea>
            </div>
            <button className="w-[14rem] border border-black rounded-full py-3">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="w-full max-w-[85rem] h-full py-5 mx-auto  text-white bg-black hidden lg:flex">
        <div className="w-full h-full px-3 pt-8">
          <div className="w-full flex flex-col items-center space-y-4 justify-center">
            <h1 className="text-3xl large-texts">Get in touch!</h1>
            <p className="text-center text-lg">
              I’m currently open to joining a new team of creative developers.
              Also, if you have a question, proposal, idea or just want to say
              hi, Go ahead.
            </p>
          </div>
          <div className="w-full h-40 space-y-3 max-w-[65rem] mx-auto  mt-10">
          <div className="w-full items-center text-lg flex space-x-4">
              <IoLocationSharp className="w-6 h-6" />
              <h1>Kwara, Nigeria</h1>
            </div>
            <div className="w-full items-center text-lg flex space-x-4">
              <AiFillPhone className="w-6 h-6" />
              <h1>+234 810 555 1713</h1>
            </div>
            <div className="w-full items-center text-lg flex space-x-4">
              <AiFillMail className="w-6 h-6" />
              <h1>boluadetifa@gmail.com</h1>
            </div>
          </div>
          <form className="w-full space-y-7 max-w-[65rem] mx-auto ">
            <div className="w-full flex flex-col">
              <h1 className="text-xl">Name</h1>
              <input
                type="text"
                className="border-b py-2 px-3 white outline-none bg-transparent"
              />
            </div>
            <div className="w-full flex flex-col">
              <h1 className="text-xl">Email Address</h1>
              <input
                type="email"
                className="border-b py-2 px-3 white outline-none bg-transparent"
              />
            </div>
            <div className="w-full flex flex-col">
              <h1 className="text-xl">Subject</h1>
              <input
                type="text"
                className="border-b py-2 px-3 white outline-none bg-transparent"
              />
            </div>
            <div className="w-full flex flex-col">
              <h1 className="text-xl">Message</h1>
              <textarea className="border-b resize-none py-2 px-3 white outline-none bg-transparent"></textarea>
            </div>

            <a href="#_" class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
<span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-white via-white to-white group-hover:opacity-100"></span>
<span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

<span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

<span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

<span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
<span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
<span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
<span class="relative group-hover:text-black">Submit</span>
</a>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
