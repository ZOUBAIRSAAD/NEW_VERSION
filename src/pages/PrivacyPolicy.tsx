import React from "react";
import {
  AlertTriangle,
  Eye,
  FileText,
  Lock,
  Shield,
  User,
  ExternalLink,
} from "lucide-react";

/**
 * PrivacyPolicy page
 *
 * This page explains how National Disability Aid Cards (NDAid) collects,
 * uses and protects your data.  The content has been reorganised into
 * clearly delineated sections with iconography and a vertical timeline
 * motif to improve readability.  Important phrases are highlighted
 * using bold text to draw the eye to critical points.  A UAE‑themed
 * hero image anchors the page and ties the design back to the overall
 * brand.
 */
const PrivacyPolicy: React.FC = () => {
  // Define the sections of the privacy policy.  Each entry contains
  // an icon, a title, and JSX content.  The text is unchanged from
  // the original policy; only the presentation has been refined with
  // paragraphs and bold highlights.
  const sections = [
    {
      icon: AlertTriangle,
      title: "Privacy Commitment",
      body: (
        <>
          <p className="mb-4">
            This privacy policy sets out how{" "}
            <strong>National Disability Aid Cards</strong> uses and protects
            any information that you give <strong>NDAid’s</strong> when you
            use this website. <strong>National Disability Aid Cards</strong>{" "}
            is committed to ensure that your privacy is protected. Should we
            ask you to provide certain information by which you can be
            identified when using this website, then you can be assured that it
            will only be used in accordance with this privacy statement.
          </p>
          <p className="mb-4">
            To safeguard your personal data, all electronic storage and
            transmission of personal data is secured with appropriate
            security technologies.
          </p>
          <p>
            If you are only browsing this website, we do not capture data
            that allows us to identify you individually.
          </p>
        </>
      ),
    },
    {
      icon: Eye,
      title: "1. Data Collected from Applicant and Sponsor Forms",
      body: (
        <>
          <p className="mb-4">
            When you complete the Applicant Information or Sponsor
            Newsletter Sign‑Up forms, we may collect the following{" "}
            <strong>personal data</strong>:
          </p>
          <ul className="ml-6 list-disc mb-4 space-y-2">
            <li>Full name</li>
            <li>Contact details, including email address</li>
            <li>
              Additional information relevant to your application or
              newsletter subscription
            </li>
          </ul>
          <p>
            This information is collected solely for the purpose of
            processing your application or managing your subscription
            preferences.
          </p>
        </>
      ),
    },
    {
      icon: FileText,
      title: "2. What We Do with the Information We Gather",
      body: (
        <>
          <p className="mb-4">
            We are <strong>committed</strong> to ensure that your
            information is secure. In order to prevent unauthorised access
            or disclosure, we have put in place suitable physical,
            electronic and managerial procedures to{" "}
            <strong>safeguard and secure</strong> the information we collect
            online.
          </p>
          <ul className="ml-6 list-disc mb-4 space-y-2">
            <li>To process applications and manage participation in relevant service</li>
            <li>To send periodic newsletters or updates to sponsors and subscribers</li>
            <li>To improve our services, website content and user experience</li>
            <li>To contact you for administrative or informational purposes related to your inquiry or submission</li>
            <li>To maintain internal records for compliance, auditing and reporting</li>
            <li>To personalise content and communication based on your preferences</li>
            <li>To ensure security and prevent fraud or misuse of our services</li>
          </ul>
          <p>
            We are committed to ensuring that your information is secure.
            Appropriate physical, electronic, and managerial procedures are
            in place to safeguard and protect the information we collect
            online.
          </p>
        </>
      ),
    },
    {
      icon: Lock,
      title: "3. Data Security and Protection",
      body: (
        <>
          <p className="mb-4">
            We are committed to ensure that your information is secure.
            In order to prevent unauthorised access or disclosure, we
            have put in place suitable physical, electronic and
            managerial procedures to safeguard and secure the information
            we collect online.
          </p>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 mb-4">
            <h4 className="font-semibold text-red-800 mb-2">We will{" "}
              <span className="underline">NEVER</span>:</h4>
            <ul className="list-disc ml-6 space-y-1 text-red-700">
              <li>Sell your personal information to third parties for commercial purposes</li>
              <li>Share medical information without explicit consent (except as legally required)</li>
              <li>Use your information for unauthorized marketing or promotional activities</li>
              <li>Disclose sensitive information to unauthorized parties</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      icon: Shield,
      title: "4. How we use cookies",
      body: (
        <>
          <p className="mb-4">
            A <strong>cookie</strong> is a small file which asks permission to
            be placed on your computer’s hard drive. Once you agree,
            the file is added and the cookie helps analyse web traffic
            or lets you know when you visit a particular site. Cookies
            allow web applications to respond to you as an individual.
            The web application can tailor its operations to your needs,
            likes and dislikes by gathering and remembering information
            about your preferences.
          </p>
          <p className="mb-4">
            We use <strong>traffic log cookies</strong> to identify which
            pages are being used. This helps us analyse data about web
            page traffic and improve our website in order to tailor it to
            customer needs. We only use this information for statistical
            analysis purposes and then the data is removed from the
            system.
          </p>
          <p className="mb-4">
            Overall, cookies help us provide you with a better website,
            by enabling us to monitor which pages you find useful and
            which you do not. A cookie in no way gives us access to
            your computer or any information about you, other than the
            data you choose to share with us.
          </p>
          <p>
            You can choose to accept or decline cookies. Most web
            browsers automatically accept cookies, but you can usually
            modify your browser setting to decline cookies if you prefer.
            This may prevent you from taking full advantage of the
            website.
          </p>
        </>
      ),
    },
    {
      icon: ExternalLink,
      title: "5. Links to other websites",
      body: (
        <>
          <p>
            Our website may contain links to other websites of interest.
            However, once you have used these links to leave our site,
            you should note that <strong>we do not have any control</strong>
            over that other website. Therefore, we cannot be responsible
            for the protection and privacy of any information which you
            provide whilst visiting such sites and such sites are not
            governed by this privacy statement. You should exercise
            caution and look at the privacy statement applicable to the
            website in question.
          </p>
        </>
      ),
    },
    {
      icon: User,
      title: "6. Controlling your personal information",
      body: (
        <>
          <p className="mb-4">
            We will <strong>not sell, distribute or lease</strong> your
            personal information to third parties unless we have your
            permission or are required by law to do so.
          </p>
          <p className="mb-4">
            If you have previously agreed to us using your personal
            information for direct marketing purposes, you may
            <strong>change your mind at any time</strong> by writing to
            or emailing us at support@ndaid.help.
          </p>
          <p>
            If you believe that any information we are holding on you
            is incorrect or incomplete, please write to or email us as
            soon as possible, at the above address. We will promptly
            correct any information found to be incorrect.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Hero section with UAE desert dunes and gradient overlay */}
      <div className="relative text-white py-20">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Desert_Dunes_U.A.E.jpg/1280px-Desert_Dunes_U.A.E.jpg"
          alt="Desert dunes in the UAE"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-black/40 to-green-700 opacity-80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Your privacy is our priority. Learn how we collect, use,
            and protect your personal information.
          </p>
        </div>
      </div>

      {/* Main content as a vertical timeline */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Last update notice */}
          <p className="text-sm text-gray-600 text-center mb-12">
            <strong>Last Updated:</strong> January 2025 | 
            <strong>Effective Date:</strong> January 1, 2025
          </p>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-uae-green"></div>
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div key={index} className="relative mb-12 flex">
                  {/* Icon marker */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-uae-green flex items-center justify-center shadow-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-8 flex-grow">
                    <h3 className="text-xl font-bold text-uae-black mb-2">
                      {section.title}
                    </h3>
                    <div className="text-gray-700 leading-relaxed">
                      {section.body}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact information */}
          <div className="mt-16 bg-gradient-to-r from-green-100 to-green-50 rounded-2xl p-8 border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Contact Our Privacy Team
            </h3>
            <p className="text-gray-700 mb-4">
              For any privacy‑related questions, concerns, or to exercise
              your rights, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Privacy Officer:</strong> support@ndaid.help
              </p>
              <p>
                <strong>Phone:</strong> +971 4 XXX XXXX (Privacy Hotline)
              </p>
              <p>
                <strong>Address:</strong> Privacy Department, NDAid,
                Dubai, UAE
              </p>
              <p>
                <strong>Response Time:</strong> We will respond to
                privacy requests within 30 days
              </p>
              <p>
                <strong>Emergency Contact:</strong> Available 24/7 for
                urgent privacy concerns
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
