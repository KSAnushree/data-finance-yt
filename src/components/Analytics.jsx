import React from "react";
import Laptop from "../assets/laptop.jpeg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-green-600 font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally{" "}
          </h1>
          <p>
            Our Data Analytics Dashboard brings all your insights together in
            one place. Track performance in real time, spot trends quickly, and
            make smarter decisions. Stay in control with a simple, interactive
            view of your data. Manage all your analytics from a single,
            centralized platform. Keep your data consistent, secure, and
            accessible anytime. Streamline workflows and make collaboration
            effortless.
          </p>
          <button className="text-green-600 w-[200px] rounded-md font-medium my=6 mx-auto md:mx-0 py-2 bg-black">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
