import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full text-white py-16 px-4">
      <div className=" max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>SIgn upto our newsletter and stay upto date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-2 w-full text-black flex rounded-md"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-green-600 w-[200px] rounded-md ml-4 font-medium my-6 mx-auto py-3 text-black">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data.
            <span className="text-green-600">Read our Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
