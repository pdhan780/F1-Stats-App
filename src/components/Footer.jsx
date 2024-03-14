const Footer = () => {
  return (
    <footer className="bg-candy-apple w-full">
      <div className="max-w-7xl mx-auto py-4 px-5 flex justify-center text-white">
        <p>© {new Date().getFullYear()} Your Application Name. All rights reserved.</p>
        {/* You can add more footer content here */}
      </div>
    </footer>
  );
};

export default Footer;
