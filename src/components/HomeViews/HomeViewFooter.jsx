const HomeViewFooter = () => {
  return (
    <footer className="bg-f1-black w-full">
      <div className="flex text-left text-white p-8 font-mono">
        <div className="flex-col flex-1"></div>
        <div className="flex border-r-8 border-b-8 rounded-br-3xl border-f1-dark-gray pr-8 py-8">
          <div className="flex-col flex-1">
            <h2 className="font-f1 font-bold">Visual References</h2>
            <p><a target="_blank" href="https://www.formula1.com/en.html" className="hover:underline">Official F1 Website</a></p>
            <p><a target="_blank" href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS Website</a></p>
          </div>
          <div className="flex-col flex-1">
            <h2 className="font-f1 font-bold">Contact Us</h2>
            <p>Our Phone Number</p>
            <p>Our Location</p>
            <p>Our Website</p>
          </div>
          <div className="flex-col flex-1">
            <h2 className="font-f1 font-bold">Acknowledgements</h2>
            <p>Developed by Brock Pearson & Pelvain Dhanda</p>
          </div>
        </div>
        <div className="flex-col flex-1"></div>
      </div>
      <div className="flex-col flex-1 text-white text-center pb-4 font-f1">
        <p>
        © {new Date().getFullYear()} | Developed by Brock Pearson & Pelvain Dhanda | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default HomeViewFooter;
