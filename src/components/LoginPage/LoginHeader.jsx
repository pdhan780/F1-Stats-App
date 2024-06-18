const LoginHeader = () => {
  return (
    <header className="w-full bg-candy-apple py-8 items-center">
      <div className="flex login-header overflow-x-clip">
      <img
        src="/assets/f1-default-share.png"
        alt="F1 Logo"
        className="h-12 ml-4 flex"
      />
      <h1 className="text-white font-bold text-xl font-f1 ml-4 flex-1 py-2">
        F1 ANALYSIS
      </h1>
      <a
        href="https://www.youtube.com/watch?v=mrgvNuUdqfY"
        target="_blank"
        className="bg-white hover:bg-candy-apple hover:text-white border-2 border-white text-candy-apple font-bold py-2 px-4 rounded-bl-lg focus:outline-none focus:shadow-outline justify-end mr-6 mt-1 flex"
      >
        {" "}
        Video Reference
      </a>
      </div>
    </header>
  );
};

export default LoginHeader;
