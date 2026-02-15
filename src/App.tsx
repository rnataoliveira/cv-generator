import React, { useRef, useState } from 'react';
import Editor from './pages/Editor';
import Preview from './pages/Preview';
import enLocale from './locales/en.json';
import ptbrLocale from './locales/pt-br.json';
import { CVData } from './types';
import { exportElementAsPDF } from './utils/pdf';

const TEMPLATES = ['A', 'B'];

const DEFAULT_DATA: CVData = {
  name: 'John Doe',
  title: 'Frontend Engineer',
  email: 'john@example.com',
  phone: '+55 11 99999-9999',
  summary: 'Product-focused engineer with experience building web apps.',
  skills: ['JavaScript', 'React', 'TypeScript'],
  experience: [
    { company: 'Acme Inc.', role: 'Senior Engineer', from: '2021', to: 'Present', description: 'Worked on web apps.' }
  ],
  education: [
    { school: 'University X', degree: 'BSc Computer Science', from: '2015', to: '2019', description: '' }
  ],
  photo: undefined,
};

export default function App() {
  const [data, setData] = useState<CVData>(DEFAULT_DATA);
  const [template, setTemplate] = useState<string>('A');
  const [language, setLanguage] = useState<'en' | 'pt-br'>('en');
  const previewRef = useRef<HTMLDivElement | null>(null);

  const labels = language === 'en' ? enLocale : ptbrLocale;

  async function handleDownload(lang: 'en' | 'pt-br') {
    const prev = language;
    setLanguage(lang);
    // wait for DOM to update to selected language
    await new Promise(r => setTimeout(r, 150));
    if (!previewRef.current) return;
    const name = (data.name || 'cv').toLowerCase().replace(/\s+/g, '-');
    await exportElementAsPDF(previewRef.current, `${name}-${lang}.pdf`);
    setLanguage(prev);
  }

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">
        <div className="col-span-5">
          <div className="bg-white border p-6 rounded-lg shadow-sm">
            <Editor
              data={data}
              setData={setData}
              labels={labels}
              language={language}
              setLanguage={setLanguage}
              onDownload={handleDownload}
              templates={TEMPLATES}
              template={template}
              setTemplate={setTemplate}
            />
          </div>
        </div>

        <div className="col-span-7">
          <div className="p-4">
            <div className="mb-3 flex justify-between items-center">
              <div className="text-sm text-gray-600">Preview ({template})</div>
              <div className="text-xs text-gray-500">Use the buttons to download EN / PT‑BR</div>
            </div>

            <div className="border p-4 bg-gray-200 flex justify-center">
              <Preview ref={previewRef} data={data} template={template} labels={labels.labels} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
