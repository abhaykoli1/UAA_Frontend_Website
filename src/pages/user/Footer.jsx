import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import logo from "../../assets/map.png";
import gpay from "../../assets/icons/Gpay.jpg";
import paytm from "../../assets/icons/paytm.jpeg";
import phonepay from "../../assets/icons/PhonePe.jpg";
import visa from "../../assets/icons/visa.webp";
import upi from "../../assets/icons/upi.webp";
import rozar from "../../assets/icons/RazorPay.png";

import whatsapp from "../../assets/icons/wp.webp";
import scroll from "../../assets/icons/scroll.gif";
function Footer() {
  const footerLinks = [
    {
      title: "Policy",
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
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <footer className="border-t-[0.5px] border-gray-600 bg-[#111] text-white pt-10">
      <div className="container mx-auto gap-10 px-4 grid lg:grid-cols-[500px_1fr] md:grid-cols-1 grid-cols-1">
        <div>
          <img src={logo} className="lg:-ml-20 " />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4 text-main ">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.to}
                      // onClick={() => goTop()}
                      className="text-white  hover:text-main duration-500"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex gap-2 lg:flex-nowrap  flex-wrap">
            <img src={rozar} alt="Paypal" className="h-10 rounded-md" />
            <img src={gpay} alt="Paypal" className="h-10 rounded-md" />
            <img src={paytm} alt="Paypal" className="h-10 rounded-md" />
            <img src={phonepay} alt="Paypal" className="h-10 rounded-md" />
            <img src={visa} alt="Paypal" className="h-10 rounded-md bg-white" />
            <img src={upi} alt="Paypal" className="h-10 rounded-md" />
          </div>
        </div>
      </div>
      <div className="bg-indigo-8 bg-main py-7 mt-8 text-center text-white text-sm">
        <p>
          &copy; {new Date().getFullYear()} UAA | Powered by UNI ACADEMIC
          ASSISTANCE
        </p>

        <p className="max-w-screen-lg mx-auto my-3">
          The materials provided by UAA are intended for research and reference
          purposes only. They should serve as guidelines for students and must
          not be submitted without proper modifications.
        </p>

        <div className="flex gap-5 text-white justify-center items-center mt-3">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl transition duration-200 hover:text-black  hover:scale-[102%] text-white"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-[22px] text-white hover:scale-[102%] hover:text-black transition duration-200 mt-[2px]"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/uniassignassets/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[22px] text-white hover:scale-[102%] hover:text-black  transition duration-200 mt-[2px]"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:scale-[102%] hover:text-black text-2xl transition duration-200"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
      {showTopBtn && (
        <div
          className="flex  shadow-2xl justify-center items-center border bg-main lg:h-16 lg:w-16 md:h-14 md:w-14 h-10 w-10 fixed right-5 bottom-5 rounded-full z-50 cursor-pointer"
          onClick={() => goTop()}
        >
          <img src={scroll} className="rotate-180" />
        </div>
      )}
      <a
        target="_black"
        href={
          "http://api.whatsapp.com/send/?phone=7597981703&text&type=phone_number&app_absent=0"
        }
        className="flex justify-center items-center lg:h-24 lg:w-24 md:h-20 md:w-20 h-16 w-16 fixed left-5 bottom-3  rounded-md z-50 cursor-pointer"
      >
        <img src={whatsapp} />
      </a>
    </footer>
  );
}

export default Footer;
