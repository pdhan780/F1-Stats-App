import React from "react";
import VideoBackground from './VideoBackground';
import Footer from "./Footer";
import LoginPage from "./LoginPage";

const LoginContainer = () => {
  return (
    // This single div acts as the parent wrapper for all elements inside the return statement
    <div className="flex flex-col min-h-screen">
      <VideoBackground />
      <div className="flex-grow flex flex-col justify-center items-center">
        {/* Ensure the form is within this div so that there is only one parent */}
          <LoginPage />
      </div>
      <Footer />
    </div>
  );
};

export default LoginContainer;
