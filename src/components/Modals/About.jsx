import React from "react";
import CloseButton from "./CloseButton";

const About = ({ update }) => {
  return (
    // Backdrop
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Modal Container */}
      <div className="bg-f1-black rounded-lg shadow-2xl p-6 flex flex-col about-line animate-slidetop">
        {/* Header */}
        <div className="flex justify-between items-center pb-3 mb-4 border-b border-f1-gray">
          <h1 className="text-3xl text-candy-apple font-f1 bg-f1-black z-10 pr-2">
            About F1 Analysis
          </h1>
        </div>
        {/* Body */}
        <div className="flex-col space-y-4">
          <div className="flex-col space-y-2">
            <div className="flex justify-between items-center space-x-4">
              <h2 className="text-xl text-white font-f1">
                Brock Pearson & Pelvain Dhanda
              </h2>
              <div className="flex-col justify-end">
                <CloseButton update={update} />
              </div>
            </div>
            <p className="text-white">
              This project is designed to offer in-depth Formula 1 race
              analysis.
              <br /> Leveraging modern web technologies, it provides fans with{" "}
              <br />
              interactive data visualizations and historical race data.
            </p>
            <p className="text-white">
              Technologies Used: React.js, Tailwind CSS, Node.js, Express, and
              Supabase.
            </p>
            <a
              href="https://github.com/bpear520/comp4513_Asg2"
              className="text-candy-apple hover:underline font-f1"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
