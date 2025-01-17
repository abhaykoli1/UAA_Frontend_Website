import React, { useState } from "react";
import { addHomeQuery } from "../../api/apiAddHomePageQuery";
const Page1 = () => {
  const [formData, setFormData] = useState({
    taskType: "",
    email: "",
    phone: "",
    countryCode: "+91",
    studentName: "",
    deadline: "",
    courseName: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Convert formData to match backend expectations
      const requestData = {
        name: formData.studentName, // Map studentName to name
        course_name: formData.courseName, // Map courseName to course_name
        service_type: formData.taskType, // Map taskType to task_type
        email: formData.email, // No change needed
        phone: formData.phone, // No change needed
        country_code: formData.countryCode, // Map countryCode to country_code
        deadline: formData.deadline, // No change needed
        description: formData.description, // No change needed
      };

      delete requestData.studentName; // Remove the original studentName key
      delete requestData.courseName; // Remove the original courseName key

      await addHomeQuery(requestData); // Send data to backend
      setSuccess(true); // Show success message
      setFormData({
        taskType: "",
        email: "",
        phone: "",
        countryCode: "+91",
        studentName: "",
        deadline: "",
        courseName: "",
        description: "",
      }); // Reset form
    } catch (err) {
      setError("Failed to submit the query. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto mt-32 px-10 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Section */}
      <div className="bg-white border shadow-xl rounded-lg p-6 w-full">
        <h1 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-700 text-center mb-6">
          AI-Free Assignment Help From 5000+ Real Experts Writing Rewriting
          Editing
        </h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 text-gray-700 w-full"
        >
          <div className="flex flex-col gap-3 my-6">
            {/* Task Type Radio Buttons */}

            <div className="flex w-full gap-5">
              {["writing", "rewriting", "editing", "it-services"].map(
                (type) => (
                  <label
                    key={type}
                    className={`flex  items-center justify-center w-full gap-2 border-[3px] ${
                      formData.taskType === type
                        ? "border-black"
                        : "border-pink-500"
                    } bg-white text-black px-4 py-4 rounded-full hover:scale-105 hover:shadow-2xl duration-500 transition-all cursor-pointer`}
                  >
                    <input
                      type="radio"
                      name="taskType"
                      value={type}
                      checked={formData.taskType === type}
                      onChange={handleChange}
                      className="peer hidden"
                    />
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </label>
                )
              )}
            </div>
          </div>

          {/* Email and Phone Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 -mb-3"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input w-full p-3 mt-2 border border-gray-300 rounded-md"
                placeholder="Email Address"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 -mb-3"
              >
                Phone Number
              </label>
              <div className="flex gap-6">
                <div className="w-20">
                  <input
                    type="text"
                    id="countryCode"
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="form-input w-full  p-3 mt-2 border border-gray-300 rounded-md"
                    placeholder="+91"
                    required
                  />
                </div>
                <div className="w-full">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(eg. 9876543210)"
                    className="form-input w-full p-3 mt-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Other Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-3">
              <div>
                <label
                  htmlFor="studentName"
                  className="block text-sm font-medium text-gray-700 -mb-3"
                >
                  Student Name
                </label>
                <input
                  type="text"
                  id="studentName"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  placeholder="Abhay"
                  className="form-input w-full p-3 mt-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="deadline"
                  className="block text-sm font-medium text-gray-700 -mb-3"
                >
                  Deadline
                </label>
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="form-input w-full p-3 mt-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="courseName"
                  className="block text-sm font-medium text-gray-700 -mb-4"
                >
                  Course Name
                </label>
                <input
                  type="text"
                  id="courseName"
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleChange}
                  placeholder="XYZ"
                  className="form-input w-full p-3 mt-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 -mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="6"
                value={formData.description}
                onChange={handleChange}
                placeholder="Write about 300 words"
                className="w-full p-5 mt-4 bg-white border border-gray-500 rounded-md shadow-sm"
                required
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black -600 text-white  py-2 rounded-md hover:scale-[102%] mt-4"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          {/* Show error or success message */}
          {error && <p className="text-red-500 mt-4">{error}</p>}
          {success && (
            <p className="text-green-500 mt-4">Query submitted successfully!</p>
          )}
        </form>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-start space-y-6">
        <h1 className="text-4xl !text-start font-bold text-indigo-700 mb-4">
          Make It <span className="">Real With Expert Assignment Help</span>
        </h1>
        <div className="text-">
          <h2 className="text-3xl mb-3 font-semibold">Affordable Prices</h2>
          <p className="text-lg  font-medium">
            Get expert academic help at unbeatable prices. Save up to 90% &
            receive quotes for free. Pay only when you're 100% satisfied.
          </p>
        </div>
        <div className="text- mt-6">
          <h2 className="text-3xl mb-3 font-semibold ">Fast Support</h2>
          <p className="text-lg  font-medium">
            Need assignment help fast? Our platform connects you with top
            experts in any field. Get quick responses and start your work in no
            time.
          </p>
        </div>
        <div className="text- mt-6">
          <h2 className="text-3xl mb-3 font-semibold">Quality Results</h2>
          <p className="text-lg  font-medium">
            Receive high-quality academic support tailored to your needs. Our
            experts deliver excellent work to ensure your success, every time.
          </p>
        </div>
        <div className="text- mt-6">
          <h2 className="text-3xl mb-3 font-semibold ">Be in Control</h2>
          <p className="text-lg font-medium">
            You're in charge. Choose the best experts for your assignment and
            only pay when you're completely happy with the results.
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
