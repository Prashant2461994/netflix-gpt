import React from "react";

const Footer = () => {
  return (
    <div className=" bg-black relative flex flex-col justify-center opacity-8 ">
      <div className="px-50 my-50 ">
        <div className="flex flex-col h-[300px] justify-center items-center ">
          <div className="text-white text-xl w-3/4 px-10 my-5">
            Questions? Call 000-800-919-1694
          </div>

          <ul className="text-white text-xl grid grid-cols-4 w-3/4 justify-center">
            <li className="px-10 my-5 flex">FAQ</li>
            <li className="px-10 my-5 flex">Help Center</li>
            <li className="px-10 my-5 flex">Terms of Use</li>
            <li className="px-10 my-5 flex">Privacy</li>
            <li className="px-10 my-5 flex">Cookie Prefrences</li>
            <li className="px-10 my-5 flex">Corporate Information</li>
            <li className="px-10 my-5 flex"></li>
            <li className="px-10 my-5 flex"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
