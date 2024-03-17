import React from "react";
import VideoBackground from './VideoBackground';
import Footer from "./Footer";
import LoginForm from "./LoginForm";
import Header from "./Header"; // Assuming you have created this
//LoginContainer Serves as the main component holding all child components you see 
//such as the login form, video, and header/footer
const LoginPage = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <VideoBackground />
        <div className="flex-grow flex justify-center items-center">
          <LoginForm />
        </div>
        <Footer />
      </div>
    );
  };
  
  export default LoginPage;
  
