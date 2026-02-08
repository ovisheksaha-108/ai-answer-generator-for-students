
import React, { useState, useRef, useEffect } from 'react';
import { AnswerType } from '../types';
import { generateStudentAnswer } from '../services/geminiService';

const Generator: React.FC = () => {
  const [input, setInput] = useState('');
  const [type, setType] = useState<AnswerType>(AnswerType.SHORT);
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  
  const outputRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setOutput('');
    
    const result = await generateStudentAnswer(input, type);
    setOutput(result);
    setLoading(false);
  };

  useEffect(() => {
    if (output && outputRef.current) {
      outputRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [output]);

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setToast("Answer copied to clipboard!");
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8">
        <div className="p-6 md:p-8">
          <label className="block text-sm font-bold text-gray-800 mb-4 uppercase tracking-wide">
            Enter your question, topic, or homework prompt:
          </label>
          <textarea
            className="w-full h-48 p-5 bg-white border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all outline-none resize-none text-gray-900 placeholder-gray-400 shadow-sm text-lg leading-relaxed"
            placeholder="e.g., Explain the causes of the French Revolution or What is photosynthesis?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="mt-8">
            <label className="block text-sm font-semibold text-gray-700 mb-4">
              Select Answer Type:
            </label>
            <div className="flex flex-wrap gap-2">
              {Object.values(AnswerType).map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                    type === t
                      ? 'bg-blue-700 text-white border-blue-700 shadow-md transform scale-105'
                      : 'bg-white text-gray-600 border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleGenerate}
              disabled={loading || !input.trim()}
              className={`flex-1 py-4 px-8 rounded-xl font-bold text-white transition-all shadow-lg text-lg ${
                loading || !input.trim()
                  ? 'bg-blue-300 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 active:transform active:scale-95 hover:shadow-xl'
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Crafting your answer...
                </span>
              ) : 'Generate Academic Answer'}
            </button>
            {output && (
              <button
                onClick={handleGenerate}
                className="py-4 px-8 rounded-xl font-bold bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 transition-all shadow-sm"
              >
                Regenerate
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Ad Space Below Generate Button */}
      <div className="max-w-4xl mx-auto mb-8 h-32 bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center rounded-lg">
        <span className="text-gray-400 text-sm font-medium uppercase tracking-widest">In-Feed Advertisement</span>
      </div>

      {output && (
        <div ref={outputRef} className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-blue-50 border-b border-blue-100 px-6 py-5 flex justify-between items-center">
            <span className="text-blue-900 font-bold flex items-center text-lg">
              <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              {type}
            </span>
            <button
              onClick={handleCopy}
              className="bg-white border border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center transition-all shadow-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
              </svg>
              Copy Answer
            </button>
          </div>
          <div className="p-8 md:p-10 prose prose-blue max-w-none">
            {output.split('\n').map((line, i) => (
              <p key={i} className="text-gray-800 text-lg leading-relaxed whitespace-pre-wrap mb-4">{line}</p>
            ))}
          </div>
        </div>
      )}

      {/* Ad Space After Output */}
      {output && (
        <div className="max-w-4xl mx-auto mb-12 h-40 bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center rounded-lg">
            <span className="text-gray-400 text-sm font-medium uppercase tracking-widest">Bottom Page Advertisement</span>
        </div>
      )}

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 bg-blue-900 text-white px-8 py-4 rounded-full shadow-2xl text-base font-bold z-50 flex items-center animate-in fade-in slide-in-from-bottom-2 duration-300">
          <svg className="w-5 h-5 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
          {toast}
        </div>
      )}
    </div>
  );
};

export default Generator;
