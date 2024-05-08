import React, { useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { checkValidData } from "../utils/validate";
import { errorMessages } from "../utils/errorMessages";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);
  const [errorMsg, setErrorMessage] = useState([]);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const toggleSignForm = () => {
    console.log(isSignInForm);
    setIsSignForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    const errors = checkValidData(email, password);
    console.log(errors);
    if (errors.length > 0) {
      setErrorMessage(errors);
    }
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-between">
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

      <div
        onSubmit={(e) => e.preventDefault()}
        className="my-[60px]  bg-black h-2/3 py-5 w-1/5  opacity-80  flex  items-center justify-center"
      >
        <form className="flex flex-col items-center justify-center px-2 py-2 w-3/4 my-2">
          <header className="text-4xl  font-bold text-white  px-5 my-5 w-full">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </header>

          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full name"
              className="block px-5 py-2 my-2 text-center font-semibold w-full rounded-sm "
            />
          )}

          <input
            ref={emailRef}
            type="text"
            placeholder="Email or Mobile number"
            className="block px-5 py-2 my-2 text-center font-semibold w-full rounded-sm "
          />
          <small className="text-red-400 font-bold">
            {errorMsg.includes(errorMessages.emailMsg)
              ? errorMessages.emailMsg
              : ""}
          </small>
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className="block px-5 py-2 my-2 text-center font-semibold w-full rounded-sm"
          />
          <small className="text-red-400 font-bold">{errorMsg.includes(errorMessages.passwordMsg)? errorMessages.passwordMsg:""}</small>
          <button
            className="font-bold text-xl text-white bg-red-800 w-full mx-2 px-2 py-1 my-2 rounded-sm"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <footer className="text-white px-5 mb-4">
            {!isSignInForm ? (
              <p>
                Are you new to Netflix? Click to{" "}
                <span
                  className="font-bold text-xl hover:cursor-pointer"
                  onClick={toggleSignForm}
                >
                  SignUp
                </span>
              </p>
            ) : (
              <p>
                Already Registered{" "}
                <span
                  onClick={toggleSignForm}
                  className="font-bold text-xl hover:cursor-pointer"
                >
                  {" "}
                  Sign In
                </span>{" "}
                now
              </p>
            )}
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
