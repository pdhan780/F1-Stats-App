const HomeViewFooter = () => {
  return (
    <footer className="bg-f1-black w-full">
      <div className="flex text-left text-white p-8 font-mono">
        <div className="flex-col flex-1"></div>
        <div className="flex border-r-8 border-b-8 rounded-br-3xl border-f1-dark-gray pr-8 py-8">
          <div className="flex-col flex-1">
            <h2 className="font-f1 font-bold">Visual References</h2>
            <p>Official F1 Website</p>
            <p>Homies Github</p>
            <p>Tailwind CSS Website</p>
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
          The materials on this website are for demonstration purposes only.
        </p>
      </div>
    </footer>
  );
};

export default HomeViewFooter;
