import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    country_code: "+91",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8080/api/v1/add-contact-query",
        {
          name: formData.name,
          phone: formData.phone,
          country_code: formData.country_code,
          email: formData.email,
          message: formData.message,
        }
      );
      toast(response.data.message);

      setFormData({
        name: "",
        country_code: "+91",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting contact query:", error);
      toast.error("Failed to submit contact query.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="Contact"
      className="lg:container lg:px-5  mx-auto pt-10 pb-16 px-4 "
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        <div className=" rounded-lg w-full">
          <h1 className="text-4xl font-bold text-main mb-6">
            Send Us a Message
          </h1>
          <p className="text-lg text-black mb-4">
            We’d love to hear from you! Whether you have questions about our IT
            services, need technical support, or are simply exploring how we can
            help transform your business with reliable tech solutions, feel free
            to get in touch with us anytime. Our dedicated team is always ready
            to assist you.
          </p>
          <div className="space-y-4">
            {/* <p className="text-[18px]">
              <strong className="text-main">Office Address:</strong> Manbagh
              Jaisinghpura Khor, Jaipur, Rajasthan 302027
            </p> */}
            <p className="text-[18px]">
              <strong className="text-main">Email:</strong>{" "}
              <a
                href="mailto:info@avbigbuddy.site"
                className="hover:underline text-black"
              >
                uniassignassets@gmail.com
              </a>
            </p>
            <p className="text-[18px]">
              <strong className="text-main">Phone:</strong> +91 7597981703
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className=" rounded-lg w-full  text-black">
          <h1 className="text-4xl font-bold text-main mb-6">
            We are here to <span className="text-black">assist</span> you!
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                type="text"
                className="w-full p-3 rounded-lg outline-none border border-gray-700 focus:border-main"
                required
              />
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <select
                  name="country_code"
                  value={formData.country_code}
                  onChange={handleChange}
                  className="p-3 rounded-lg outline-none border border-gray-700 focus:border-main"
                >
                  <option value="+91">+91 (India)</option>
                  <option value="+1">+1 (US)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+61">+61 (Australia)</option>
                </select>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="text"
                  placeholder="Phone Number"
                  className="w-full p-3 rounded-lg outline-none border border-gray-700 focus:border-main"
                  required
                />
              </div>
            </div>

            <div>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg outline-none border border-gray-700 focus:border-main"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full text-black p-3 rounded-lg outline-none border border-gray-700 focus:border-main"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 rounded-lg bg-main hover:bg-purple-600 text-white font-semibold"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
