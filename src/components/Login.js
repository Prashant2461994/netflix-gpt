import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  return (
    <div className="relative w-full h-lvh flex flex-col items-center justify-between">
      <div className="flex w-full">
        <Header />
      </div>
      <div className="absolute left-0 right-0 bottom-0 -z-10 h-full bg-gradient-to-b  from-black">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          srcset="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
          alt="netflix-background-img"
        ></img>
  </div>

      <div className="my-[60px]  bg-black h-3/4 w-fit  opacity-80  flex  items-center justify-center">
        <form className="flex flex-col items-center justify-center px-2 py-2 w-3/4">
          <header className="text-5xl font-bold text-white  px-5 my-10 w-full">
            Sign In
          </header>
          <input
            type="text"
            placeholder="Email or Mobile number"
            className="block px-5 py-4 my-2 text-center font-semibold w-full rounded-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="block px-5 py-4 my-2 text-center font-semibold w-full rounded-sm"
          />
          <button className="font-bold text-2xl text-white bg-red-800 w-full mx-2 px-2 py-2 my-2 rounded-sm">
            Sign up
          </button>

          <footer className="text-white px-5">
            This page is protected by Google reCaptcha to ensure you're not a
            bot
          </footer>
        </form>
      </div>

      <div className="w-full h-fit">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
