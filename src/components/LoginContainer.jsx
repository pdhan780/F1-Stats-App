import React from "react";
import VideoBackground from './VideoBackground';
import Footer from "./Footer";
import LoginPage from "./LoginPage";
import Header from "./Header"; // Assuming you have created this

const LoginContainer = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <VideoBackground />
        <div className="flex-grow flex justify-center items-center">
          <LoginPage />
        </div>
        <Footer />
      </div>
    );
  };
  
  export default LoginContainer;
  
