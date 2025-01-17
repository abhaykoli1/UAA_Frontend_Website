import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const footerLinks = [
    {
      title: "Legal",
      links: [
        { name: "Terms and Conditions", to: "/Terms&Condition" },
        { name: "Privacy Policy", to: "/privacy-Policy" },
        // { name: "Refund and Return", to: "/" },
        // { name: "Fair and Policy", to: "/" },
        // { name: "Cancellation Policy", to: "/" },
      ],
    },
    {
      title: "Pages",
      links: [
        { name: "About Us", to: "/about" },
        { name: "Contact Us", to: "/contact-Us" },
        { name: "Become an Affiliate", to: "/" },
        { name: "FL Registration", to: "/" },
        { name: "FAQs", to: "/faq" },
      ],
    },
    {
      title: "Service",
      links: [
        { name: "Management Assignment Writing", to: "/" },
        { name: "Technical Assignment Writing", to: "/" },
        { name: "Finance Assignment Writing", to: "/" },
        { name: "Medical Nursing Writing", to: "/" },
      ],
    },
  ];

  return (
    <footer className="border-t-[0.5px] border-gray-600 bg-[#111] text-white pt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4 text-pink-500 underline">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.to}
                      // onClick={() => goTop()}
                      className="text-gray-400  hover:text-pink-500 duration-500"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-indigo-800 py-7 mt-8 text-center text-white text-sm">
        <p>
          &copy; {new Date().getFullYear()} 2021-2024 UAA | Powered by Academic
          Help & E-Counselling
        </p>

        <div className="flex gap-5 text-white justify-center items-center mt-3">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl transition duration-200 text-white"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-[22px] text-white transition duration-200 mt-[2px]"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[22px] text-white transition duration-200 mt-[2px]"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl transition duration-200"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
