import React, { useState } from "react";
import { addHomeQuery } from "../../api/apiAddHomePageQuery";
import { toast } from "react-toastify";

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
      toast("Thank You for booking our consultancy");
      setFormData({
        taskType: "",
        email: "",
        phone: "",
        countryCode: "+91",
        studentName: "",
        deadline: "",
        courseName: "",
        description: "",
      });
    } catch (err) {
      toast("Failed to submit the query. Please try again.");
      // setError("Failed to submit the query. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto lg:container  mt-16  px-5 sm:px-5 lg:px-5 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Right Section */}
      <div className="flex flex-col items-start space-y-6">
        <h1 className="text-4xl !text-start font-bold text-main mb-4">
          Make It <span className="">Real With Expert Assignment Help</span>
        </h1>
        <div className="text-">
          <h3 className="text-3xl mb-3 font-semibold">Affordable Prices</h3>
          <p className="text-lg  font-medium">
            Get expert academic help at unbeatable prices. Save up to 90% &
            receive quotes for free. Pay only when you're 100% satisfied.
          </p>
        </div>
        <div className="text- mt-6">
          <h3 className="text-3xl mb-3 font-semibold ">Fast Support</h3>
          <p className="text-lg  font-medium">
            Need assignment help fast? Our platform connects you with top
            experts in any field. Get quick responses and start your work in no
            time.
          </p>
        </div>
        <div className="text- mt-6">
          <h3 className="text-3xl mb-3 font-semibold">Quality Results</h3>
          <p className="text-lg  font-medium">
            Receive high-quality academic support tailored to your needs. Our
            experts deliver excellent work to ensure your success, every time.
          </p>
        </div>
        <div className="text- mt-6">
          <h3 className="text-3xl mb-3 font-semibold ">Be in Control</h3>
          <p className="text-lg font-medium">
            You're in charge. Choose the best experts for your assignment and
            only pay when you're completely happy with the results.
          </p>
        </div>

        {/* Optional Image */}
        {/* Uncomment the below section if you want the image */}
        {/* <img src={flower} alt="flower" className="mt-5 max-w-[400px] hidden sm:block" /> */}
      </div>
      <div className="bg-white border shadow-xl rounded-lg p-6 w-full ">
        <h3 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-700 text-center mb-6">
          AI-Free Assignment Help From 5000+ Real Experts Writing Rewriting
          Editing
        </h3>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 text-gray-700 w-full"
        >
          <div className="flex flex-col gap-3 my-6">
            {/* Task Type Radio Buttons */}

            <div className="grid w-full gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
              {["writing", "rewriting", "editing", "it-services"].map(
                (type) => (
                  <label
                    key={type}
                    className={`flex items-center !py-3 justify-center w-full gap-2 border-[3px] ${
                      formData.taskType === type
                        ? "border-black"
                        : "border-main"
                    } bg-white text-black px-4 py-4 rounded-lg hover:scale-105 hover:shadow-2xl duration-500 transition-all cursor-pointer`}
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
                className="form-input focus:border-main w-full p-3 mt-2 border border-gray-300 rounded-md"
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
                <div className="w-32">
                  <select
                    id="countryCode"
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="form-input focus:border-main w-full p-3 mt-2 border border-gray-300 rounded-md"
                    required
                  >
                    <option value="+93">+93 Afghanistan</option>
                    <option value="+355">+355 Albania</option>
                    <option value="+213">+213 Algeria</option>
                    <option value="+1">+1 American Samoa</option>
                    <option value="+376">+376 Andorra</option>
                    <option value="+244">+244 Angola</option>
                    <option value="+54">+54 Argentina</option>
                    <option value="+61">+61 Australia</option>
                    <option value="+43">+43 Austria</option>
                    <option value="+880">+880 Bangladesh</option>
                    <option value="+1">+1 Barbados</option>
                    <option value="+32">+32 Belgium</option>
                    <option value="+55">+55 Brazil</option>
                    <option value="+359">+359 Bulgaria</option>
                    <option value="+1">+1 Canada</option>
                    <option value="+56">+56 Chile</option>
                    <option value="+86">+86 China</option>
                    <option value="+57">+57 Colombia</option>
                    <option value="+506">+506 Costa Rica</option>
                    <option value="+385">+385 Croatia</option>
                    <option value="+357">+357 Cyprus</option>
                    <option value="+420">+420 Czech Republic</option>
                    <option value="+45">+45 Denmark</option>
                    <option value="+20">+20 Egypt</option>
                    <option value="+372">+372 Estonia</option>
                    <option value="+358">+358 Finland</option>
                    <option value="+33">+33 France</option>
                    <option value="+995">+995 Georgia</option>
                    <option value="+49">+49 Germany</option>
                    <option value="+30">+30 Greece</option>
                    <option value="+852">+852 Hong Kong</option>
                    <option value="+36">+36 Hungary</option>
                    <option value="+91">+91 India</option>
                    <option value="+62">+62 Indonesia</option>
                    <option value="+353">+353 Ireland</option>
                    <option value="+972">+972 Israel</option>
                    <option value="+39">+39 Italy</option>
                    <option value="+81">+81 Japan</option>
                    <option value="+254">+254 Kenya</option>
                    <option value="+82">+82 South Korea</option>
                    <option value="+371">+371 Latvia</option>
                    <option value="+370">+370 Lithuania</option>
                    <option value="+60">+60 Malaysia</option>
                    <option value="+52">+52 Mexico</option>
                    <option value="+31">+31 Netherlands</option>
                    <option value="+64">+64 New Zealand</option>
                    <option value="+234">+234 Nigeria</option>
                    <option value="+47">+47 Norway</option>
                    <option value="+92">+92 Pakistan</option>
                    <option value="+51">+51 Peru</option>
                    <option value="+63">+63 Philippines</option>
                    <option value="+48">+48 Poland</option>
                    <option value="+351">+351 Portugal</option>
                    <option value="+40">+40 Romania</option>
                    <option value="+7">+7 Russia</option>
                    <option value="+966">+966 Saudi Arabia</option>
                    <option value="+65">+65 Singapore</option>
                    <option value="+421">+421 Slovakia</option>
                    <option value="+386">+386 Slovenia</option>
                    <option value="+27">+27 South Africa</option>
                    <option value="+34">+34 Spain</option>
                    <option value="+94">+94 Sri Lanka</option>
                    <option value="+46">+46 Sweden</option>
                    <option value="+41">+41 Switzerland</option>
                    <option value="+886">+886 Taiwan</option>
                    <option value="+66">+66 Thailand</option>
                    <option value="+90">+90 Turkey</option>
                    <option value="+380">+380 Ukraine</option>
                    <option value="+971">+971 United Arab Emirates</option>
                    <option value="+44">+44 United Kingdom</option>
                    <option value="+1">+1 United States</option>
                    <option value="+598">+598 Uruguay</option>
                    <option value="+998">+998 Uzbekistan</option>
                    <option value="+84">+84 Vietnam</option>
                    <option value="+263">+263 Zimbabwe</option>
                  </select>
                </div>
                <div className="w-full">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone no."
                    className="form-input focus:border-main w-full p-3 mt-2 border border-gray-300 rounded-md"
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
                  placeholder="Name"
                  className="form-input focus:border-main w-full p-3 mt-2 border border-gray-300 rounded-md"
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
                  className="form-input focus:border-main w-full p-3 mt-2 border border-gray-300 rounded-md"
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
                  placeholder="Course"
                  className="form-input focus:border-main w-full p-3 mt-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 "
              >
                Description
              </label>

              <textarea
                id="description"
                name="description"
                rows="7"
                value={formData.description}
                onChange={handleChange}
                placeholder="Write about 300 words"
                className="w-full p-5 -mt-1 bg-white border focus:outline-main border-gray-500 rounded-md shadow-sm"
                required
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-main  text-white  duration-500 transition-all py-2 rounded-md hover:scale-[102%] mt-4"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Book Consultancy"}
          </button>

          {/* Show error or success message */}
          {/* {error && <p className="text-red-500 mt-4">{error}</p>}
          {success && (
            <p className="text-green-500 mt-4">Query submitted successfully!</p>
          )} */}
        </form>
      </div>
    </section>
  );
};

export default Page1;
