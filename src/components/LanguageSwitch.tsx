import React from 'react';

type Props = {
  language: string;
  setLanguage: (l: string) => void;
};

export default function LanguageSwitch({ language, setLanguage }: Props) {
  return (
    <div className="flex gap-2 items-center">
      <button
        className={`px-3 py-1 rounded text-sm ${language === 'en' ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
      <button
        className={`px-3 py-1 rounded text-sm ${language === 'pt-br' ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}
        onClick={() => setLanguage('pt-br')}
      >
        PT‑BR
      </button>
    </div>
  );
}
