import FooterReferences from "./FooterReferences";
import FooterAcknowledge from "./FooterAcknowledge";
import FooterContact from "./FooterFollow";

const HomeViewFooter = () => {
  return (
    <footer className="bg-f1-black w-full">
      <div className="flex text-left text-white p-8 font-mono">
        <div className="flex-col flex-1"></div>
        <div className="flex border-r-8 border-b-8 rounded-br-3xl border-f1-dark-gray pr-8 py-4">
          <FooterReferences />
          <FooterContact />
          <FooterAcknowledge />
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
