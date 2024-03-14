const Footer = () => {
  return (
    <footer className="bg-candy-apple w-full static bottom-0">
      <div className="text-center text-white py-8 font-f1">
        <p>© {new Date().getFullYear()} Your Application Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
