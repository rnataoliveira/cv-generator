import React from 'react';
import { CVData } from '../types';
import FormFields from '../components/FormFields';
import LanguageSwitch from '../components/LanguageSwitch';

type EditorProps = {
  data: CVData;
  setData: React.Dispatch<React.SetStateAction<CVData>>;
  labels: any;
  language: 'en' | 'pt-br';
  setLanguage: (l: string) => void;
  onDownload: (lang: 'en' | 'pt-br') => Promise<void>;
  templates: string[];
  template: string;
  setTemplate: (t: string) => void;
};

export default function Editor({ data, setData, labels, language, setLanguage, onDownload, templates, template, setTemplate }: EditorProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
        <div>
          <h1 className="text-xl font-semibold">{labels.siteTitle}</h1>
          <div className="mt-2">
            <LanguageSwitch language={language} setLanguage={setLanguage} />
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <button
            className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded text-sm"
            onClick={() => onDownload('en')}
            aria-label="Download CV in English"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3v10.586l3.293-3.293 1.414 1.414L12 17.414 7.293 12.707l1.414-1.414L11 13.586V3h1z" />
              <path d="M5 20h14v-2H5v2z" />
            </svg>
            <span>Download EN</span>
          </button>

          <button
            className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded text-sm"
            onClick={() => onDownload('pt-br')}
            aria-label="Baixar CV em Português"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3v10.586l3.293-3.293 1.414 1.414L12 17.414 7.293 12.707l1.414-1.414L11 13.586V3h1z" />
              <path d="M5 20h14v-2H5v2z" />
            </svg>
            <span>Baixar PT‑BR</span>
          </button>
        </div>
      </div>

      <FormFields data={data} setData={setData} labels={labels.labels} templates={templates} template={template} setTemplate={setTemplate} />
    </div>
  );
}
