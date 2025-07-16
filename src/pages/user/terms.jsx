import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="p-5 container mx-auto">
      <div className="px-5">
        <h1 className="font-bold text-black text-center">
          Terms and <span className="text-pink-500">Conditions</span>
        </h1>
        <p className="text-black text-center font mb-14 pt-2 pb-10 border-b border-gray-300">
          Comprehensive Assignment Assistance With a No-AI Guarantee!
        </p>

        <h2 className="text-xl font-bold text-pink-500 mb-3">
          Acceptance of Terms
        </h2>
        <p className="text-black mb-10">
          By accessing and using our services, you agree to comply with and be
          bound by the following terms and conditions. If you do not agree with
          these terms, you are not authorized to use our services.
        </p>

        <h2 className="text-xl font-bold text-pink-500 mb-3">Service Scope</h2>
        <p className="text-black mb-10">
          Our services are strictly for academic assistance and are intended to
          provide customized drafts and reference materials. The work delivered
          by us is not meant for submission as-is and should be used for
          reference purposes only.
        </p>

        <h2 className="text-xl font-bold text-pink-500 mb-3">
          User Responsibilities
        </h2>
        <ol className="mb-10 space-y-3 pl-3">
          <div className="flex gap-6">
            1.
            <li>
              Users must provide complete and accurate information during the
              order placement process. Incomplete or incorrect information may
              result in delays or errors for which we are not responsible.
            </li>
          </div>
          <div className="flex gap-6">
            2.
            <li>
              Users must ensure that all uploaded materials, including
              additional sources, are provided at the time of order placement.
            </li>
          </div>
          <div className="flex gap-6">
            3.
            <li>
              Users are responsible for reviewing and providing feedback on
              draft submissions within the specified timelines.
            </li>
          </div>
        </ol>

        <h2 className="text-xl font-bold text-pink-500 mb-3">Payment Terms</h2>
        <p className="text-black mb-10">
          All payments for our services are to be made upfront at the time of
          placing the order. We accept payments through secure and verified
          channels. Any additional charges for revisions or amendments requested
          outside the scope of the original order will be communicated and must
          be paid before the work is carried out.
        </p>

        <h2 className="text-xl font-bold text-pink-500 mb-3">
          Revision Policy
        </h2>
        <p className="text-black mb-10">
          Revisions are allowed within the duration specified in the chosen
          plan: 30 days for Limited, 45 days for Standard, and 60 days for
          Premium. Revision requests must align with the original order
          requirements. Any changes deviating from the initial instructions may
          incur additional charges.
        </p>

        <h2 className="text-xl font-bold text-pink-500 mb-3">Refund Policy</h2>
        <p className="text-black mb-10">
          Please refer to our Refund Policy for detailed information about
          eligibility and conditions for refunds. Refunds are granted only under
          specific circumstances, such as no delivery or partial delivery, and
          must comply with the evidence and timeline requirements outlined in
          the policy.
        </p>

        <h2 className="text-xl font-bold text-pink-500 mb-3">
          Limitation of Liability
        </h2>
        <p className="text-black mb-10">
          We are not liable for any indirect, incidental, or consequential
          damages arising from the use of our services. Our maximum liability is
          limited to the amount paid by the customer for the specific order in
          question.
        </p>

        <h2 className="text-xl font-bold text-pink-500 mb-3">
          Prohibited Activities
        </h2>
        <ol className="mb-10 space-y-3 pl-3">
          <div className="flex gap-6">
            1.
            <li>
              Submission of our work as-is to any academic institution or other
              organization is strictly prohibited.
            </li>
          </div>
          <div className="flex gap-6">
            2.
            <li>
              Engaging in fraudulent activities, including the use of stolen or
              unauthorized payment methods.
            </li>
          </div>
        </ol>

        <h2 className="text-xl font-bold text-pink-500 mb-3">Governing Law</h2>
        <p className="text-black mb-10">
          These terms and conditions are governed by the laws of [Your
          Jurisdiction]. Any disputes arising from these terms will be resolved
          in accordance with applicable laws in [Your Jurisdiction].
        </p>

        <h2 className="text-xl font-bold text-pink-500 mb-3">
          Changes to Terms
        </h2>
        <p className="text-black">
          We reserve the right to modify these terms and conditions at any time.
          Users are encouraged to review the terms periodically. Continued use
          of our services constitutes acceptance of any changes.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
