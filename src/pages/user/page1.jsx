import React from "react";
import flower from "../../assets/flower.png";

const Page1 = () => {
  return (
    <div className="mx-auto mt-32 px-10 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Section */}
      <div className=" bg-white shadow-lg rounded-lg p-6 w-full">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 text-center mb-6">
          AI-Free Assignment Help From 5000+ Real Experts Writing Rewriting
          Editing
        </h1>
        <div className="flex  flex-col sm:flex-row justify-between mb-6 gap-6">
          <div className="flex flex-col gap-5 w-full">
            <button className="border-2 border-indigo-600 bg-white w-full text-black px-4 py-4 rounded-full hover:scale-105 hover:shadow-2xl duration-500 transition-all">
              Writing
            </button>
            <button className="border-2 border-indigo-600 bg-white text-black px-4 py-4 rounded-full hover:scale-105 hover:shadow-2xl duration-500 transition-all">
              Rewriting
            </button>
          </div>
          <div className="flex flex-col gap-5 w-full">
            <button className="border-2 border-indigo-600 bg-white text-black px-4 py-4 rounded-full hover:scale-105 hover:shadow-2xl duration-500 transition-all">
              Editing
            </button>
            <button className="border-2 border-indigo-600 bg-white text-black px-4 py-4 rounded-full hover:scale-105 hover:shadow-2xl duration-500 transition-all">
              IT Services
            </button>
          </div>
        </div>

        <form className="space-y-4 text-gray-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input w-full p-3 mt-2 border border-gray-300 rounded-md"
                placeholder="Email Address"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="flex gap-6">
                <div className="w-20">
                  <input
                    type="text"
                    id="country-code"
                    name="country-code"
                    className="form-input w-full p-3 mt-2 border border-gray-300 rounded-md"
                    placeholder="+91"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(eg. 9876543210)"
                    className="form-input w-full p-3 mt-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <div>
                <label
                  htmlFor="student-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Student Name
                </label>
                <input
                  type="text"
                  id="student-name"
                  name="student-name"
                  placeholder="Abhay"
                  className="form-input w-full p-3 mt-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="deadline"
                  className="block text-sm font-medium text-gray-700"
                >
                  Deadline
                </label>
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  className="form-input w-full p-3 mt-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="course-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Course Name
                </label>
                <input
                  type="text"
                  id="course-name"
                  name="course-name"
                  className="form-input w-full p-3 mt-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="5"
                placeholder="Write about 300 words"
                className="w-full p-5 mt-4 bg-white border border-gray-300 rounded-md shadow-sm"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 mt-4"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-end space-y-6">
        <h1 className="text-4xl font-semibold text-indigo-700 mb-4">
          Make It <span className="text-indigo-100">Real With Writer</span>
        </h1>
        <div className="text-right">
          <h2 className="text-3xl mb-3 text-indigo-100">The best talent</h2>
          <p className="text-lg text-white">
            World's largest freelance marketplace. Any job you can possibly
            think of. Save up to 90% & get quotes for free. Pay only when you're
            100% happy.
          </p>
        </div>
        <div className="text-right mt-6">
          <h2 className="text-3xl mb-3 text-indigo-100">Fast bids</h2>
          <p className="text-lg text-white">
            World's largest freelance marketplace. Any job you can possibly
            think of. Save up to 90% & get quotes for free. Pay only when you're
            100% happy.
          </p>
        </div>
        <div className="text-right mt-6">
          <h2 className="text-3xl mb-3 text-indigo-100">Quality work</h2>
          <p className="text-lg text-white">
            World's largest freelance marketplace. Any job you can possibly
            think of. Save up to 90% & get quotes for free. Pay only when you're
            100% happy.
          </p>
        </div>
        <div className="text-right mt-6">
          <h2 className="text-3xl mb-3 text-indigo-100">Be in control</h2>
          <p className="text-lg text-white">
            World's largest freelance marketplace. Any job you can possibly
            think of. Save up to 90% & get quotes for free. Pay only when you're
            100% happy.
          </p>
        </div>

        {/* Optional Image */}
        {/* Uncomment the below section if you want the image */}
        {/* <img src={flower} alt="flower" className="mt-5 max-w-[400px] hidden sm:block" /> */}
      </div>
    </div>
  );
};

export default Page1;
