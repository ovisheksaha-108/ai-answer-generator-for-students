
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Generator from './components/Generator';
import SEOContent from './components/SEOContent';
import About from './components/About';
import Privacy from './components/Privacy';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200 py-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">A</div>
            <span className="text-xl font-bold text-gray-800 tracking-tight hidden sm:inline">AI Answer Generator</span>
            <span className="text-xl font-bold text-gray-800 tracking-tight sm:hidden">AI Answers</span>
          </Link>
          <nav className="flex space-x-6 text-sm font-medium text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition-colors">Tool</Link>
            <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-[#0a192f] text-white py-12 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold mb-4">AI Answer Generator for Students</h3>
              <p className="text-blue-100/80 text-sm max-w-md leading-relaxed">
                Empowering students worldwide with structured, clear, and academic answers to help them excel in their studies and exam preparation.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">About Our Tool</Link></li>
                <li><Link to="/privacy" className="text-white/80 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><a href="mailto:aianswerforstudents@gmail.com" className="text-white/80 hover:text-white transition-colors">Contact Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-white/50">© {new Date().getFullYear()} AI Answer Generator for Students. All rights reserved.</p>
            <div className="text-xs text-white/50">
              Support Email: <a href="mailto:aianswerforstudents@gmail.com" className="text-blue-400 hover:underline">aianswerforstudents@gmail.com</a>
            </div>
          </div>
        </div>
        {/* Sticky Mobile Footer Ad Space */}
        <div className="fixed bottom-0 left-0 w-full h-12 bg-gray-900 border-t border-gray-800 flex items-center justify-center md:hidden z-40">
            <span className="text-[10px] text-gray-500 uppercase tracking-widest">Advertisement</span>
        </div>
      </footer>
    </div>
  );
};

const HomePage = () => (
  <>
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-4">AI Answer Generator for Students</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Get structured, high-quality, exam-ready answers for any topic or homework question in seconds.</p>
      </div>

      {/* Ad Placeholder Below H1 */}
      <div className="max-w-4xl mx-auto mb-8 h-24 bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center rounded-lg">
        <span className="text-gray-400 text-sm font-medium uppercase tracking-widest">Advertisement Space</span>
      </div>

      <Generator />
      <SEOContent />
    </div>
  </>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
