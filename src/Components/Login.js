import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [isSignIn, SetIsSignIn] = useState(true)

  const toggleSignUp = ()=>{
    SetIsSignIn(!isSignIn)
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img  
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bg-img"
        />
      </div>
      <form className="w-3/12 bg-black absolute my-36 mx-auto left-0 right-0 text-white p-12 bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
{ !isSignIn && <input type="text" placeholder="Name" className="rounded-lg p-4 my-4 w-full bg-gray-500"/>}
        <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-500 rounded-lg  "/>
        <input type="password" placeholder="Password" className="rounded-lg p-4 my-4 w-full bg-gray-500"/>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignIn ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignUp} >{isSignIn ? "New to Neflix? Sign up now" : "Already Registered? Sign In now "}</p>
      </form>
    </div>
  );
};

export default Login;
