import React from "react";

function Contact() {
  return (
    <div className="px-10 mx-auto py-20 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="py-3 rounded shadow-lg text-white">
          <h1 className=" font-bold text-pink-500 mb-4 ">Reach Us</h1>
          <p className="text-lg mb-6">
            Reach out to our team for any queries or assistance with our IT
            services. We’re here to support your needs with our reliable and
            professional solutions.
          </p>
          <p className="mb-2 text-lg">
            <strong>Office Address:</strong> 1234 Tech Lane, Innovation City,
            56789
          </p>
          <p className="mb-2 text-lg">
            <strong>Email:</strong> gmail.com
          </p>
          <p className="mb-2 text-lg">
            <strong>Phone:</strong> +91
          </p>
        </div>
        <div>
          <form className=" border-[.5px] border-gray-500 p-5 bg-white text-black rounded-md shadow-lg ">
            <input
              placeholder="Name"
              type="text"
              className="w-full p-2 mb-2 rounded outline-none bg-transparent border-b-[.5px] border-gray-500"
            />
            <div className="flex items-center mb-4">
              <select className="p-2 mr-2  rounded outline-none bg-transparent border-b-[.5px] border-gray-500">
                <option value="+1">+1 (US)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+91">+91 (India)</option>
                <option value="+61">+61 (Australia)</option>
              </select>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-2 rounded outline-none bg-transparent border-b-[.5px] border-gray-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-2 rounded outline-none bg-transparent border-b-[.5px] border-gray-500"
            />

            <textarea
              placeholder="Message"
              className="w-full p-2 mb-4 rounded text-black outline-none bg-transparent border-b-[.5px] border-gray-500"
            ></textarea>

            <button
              type="submit"
              className="w-full border-none rounded bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
