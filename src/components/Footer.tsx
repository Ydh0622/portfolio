import { useState } from 'react';
import { Mail, Check, Copy } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = 'dhyou010628@gmail.com'; 

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-16 px-6 border-t border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact</h2>
          <p className="text-sm text-gray-600">
            함께 성장할 수 있는 프론트엔드 포지션이나 협업 제안을 기다립니다.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>{email}</span>
            {copied ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Copy className="w-4 h-4 text-gray-400" />
            )}
          </button>

          <a
            href="https://github.com/Ydh0622"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-12 pt-6 border-t border-gray-100 text-xs text-gray-400 flex justify-between">
        <span>© 2026 Frontend Developer Portfolio. All rights reserved.</span>
        <span>Built with React, TypeScript & Tailwind CSS</span>
      </div>
    </footer>
  );
};