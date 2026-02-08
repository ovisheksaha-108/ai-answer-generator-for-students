
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-8">About Our Tool</h1>
      <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
        <p>
          The <strong>AI Answer Generator for Students</strong> was born out of a simple observation: students often know the concepts but struggle with how to articulate and structure them for academic success. Our mission is to provide a free, accessible, and high-quality study tool that empowers learners around the globe.
        </p>
        <p>
          We believe that every student, regardless of their background or financial situation, deserves access to educational support that can help them clarify their thoughts and prepare for exams. This tool is designed to be a "digital tutor" that provides immediate examples of well-structured academic content.
        </p>
        <p>
          The technology behind this app uses the latest advancements in natural language processing to understand your questions and generate context-aware responses. However, we maintain a firm stance on educational ethics: our generator is a starting point for learning, not a replacement for the student's own intellectual effort.
        </p>
        <p>
          Our commitment is to keep this tool 100% free, without any hidden subscriptions or paywalls. We fund our operations through minimal and non-intrusive advertising, ensuring that our service remains available to everyone. No sign-ups are required, ensuring your time is spent on what matters most—your education.
        </p>
        <p className="font-semibold text-blue-800">
          For any inquiries or feedback, please reach out to us at: <a href="mailto:aianswerforstudents@gmail.com" className="underline">aianswerforstudents@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default About;
