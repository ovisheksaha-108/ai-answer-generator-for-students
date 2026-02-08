
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <meta name="robots" content="noindex" />
      <h1 className="text-4xl font-extrabold text-blue-900 mb-8">Privacy Policy</h1>
      <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
        <p className="text-sm italic">Last updated: {new Date().toLocaleDateString()}</p>
        
        <p>
          Your privacy is of the utmost importance to us. This Privacy Policy outlines how we handle data and the measures we take to protect your information when you use the AI Answer Generator for Students.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Handling & Storage</h2>
        <p>
          We operate on a "privacy-first" principle. Our application does not require you to create an account, log in, or provide any personal identification information. We do not store your search queries or the generated answers on a permanent database. All interactions are processed in real-time and are not linked to your personal identity.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies and Web Beacons</h2>
        <p>
          Like most websites, we use basic cookies to improve your user experience and to analyze site traffic. These cookies do not contain personally identifiable information.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Google AdSense and Advertising</h2>
        <p>
          We use Google AdSense to serve advertisements on our site. Google, as a third-party vendor, uses cookies to serve ads based on your visit to this and other websites on the internet.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet.</li>
          <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" className="underline text-blue-600">Google Ads Settings</a>.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third-Party Advertising</h2>
        <p>
          Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on our site, which are sent directly to users' browsers. They automatically receive your IP address when this occurs.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">User Consent</h2>
        <p>
          By using our website, you hereby consent to our Privacy Policy and agree to its terms. If you have any questions regarding this policy, please feel free to contact us via our support email.
        </p>

        <p className="font-semibold mt-8">
          Support Email: <a href="mailto:aianswerforstudents@gmail.com" className="underline text-blue-600">aianswerforstudents@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default Privacy;
