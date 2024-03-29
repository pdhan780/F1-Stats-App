import React from "react";
import VideoBackground from './VideoBackground';
import LoginFooter from "./LoginFooter";
import LoginForm from "./LoginForm";
import LoginHeader from "./LoginHeader"; // Assuming you have created this
//LoginContainer Serves as the main component holding all child components you see 
//such as the login form, video, and header/footer
const LoginPage = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <LoginHeader />
        <VideoBackground />
        <div className="flex-grow flex justify-center items-center">
          <LoginForm />
        </div>
        <LoginFooter />
      </div>
    );
  };
  
  export default LoginPage;
  
