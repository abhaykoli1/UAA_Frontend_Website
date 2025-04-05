import React from "react";
import { Helmet } from "react-helmet";

function About() {
  return (
    <div className="container mx-auto py-8 text-black">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us</title>
        <meta
          name="description"
          content="This is the description of my page."
        />
        <link rel="canonical" href="https://uniacademicassistance.in/about" />
      </Helmet>
      <h1 className=" font-bold mb-4 text-center">About Us</h1>
      <p className="text-lg text-black text-center mb-14">
        Our team of experienced professionals is dedicated to providing
        top-notch IT solutions for businesses of all sizes.
      </p>

      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <h2 className="text-2xl font-semibold text-main mb-4">Who We Are</h2>
          <p className="text-lg text-black mb-4">
            We are a full-service IT consulting and development company,
            providing innovative solutions that empower businesses to stay ahead
            in today’s fast-paced, technology-driven world. Our team is
            committed to understanding your unique needs and delivering
            tailor-made services that drive success.
          </p>
          <p className="text-lg text-black">
            With years of experience in various sectors, we provide cutting-edge
            solutions in Android development, website design, digital marketing,
            and UX/UI design. Our goal is to help your business streamline
            operations, engage customers, and grow sustainably.
          </p>
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold text-main mb-4">Our Mission</h2>
          <p className="text-lg text-black mb-4">
            Our mission is simple: To provide reliable, scalable, and efficient
            IT solutions that allow businesses to innovate, grow, and thrive. We
            aim to bridge the gap between technology and business by offering
            state-of-the-art solutions that enhance productivity and customer
            satisfaction.
          </p>

          <h2 className="text-2xl font-semibold text-main mb-4">Our Values</h2>
          <ul className="text-lg text-black space-y-2">
            <li>
              <strong>Innovation:</strong> We thrive on creativity and embrace
              new technologies to stay ahead of the curve.
            </li>
            <li>
              <strong>Integrity:</strong> We believe in honesty and transparency
              in every interaction and decision we make.
            </li>
            <li>
              <strong>Customer-Centric:</strong> Our solutions are designed with
              your needs in mind, ensuring the best possible outcomes.
            </li>
            <li>
              <strong>Excellence:</strong> We never compromise on the quality of
              our work, ensuring top-notch results with every project.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
