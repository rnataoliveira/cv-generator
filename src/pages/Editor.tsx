import React from 'react';
import { CVData } from '../types';
import FormFields from '../components/FormFields';
import LanguageSwitch from '../components/LanguageSwitch';

type Props = {
  data: CVData;
  setData: (d: CVData) => void;
  labels: any;
  language: string;
  setLanguage: (l: string) => void;
  onDownload: (lang: string) => Promise<void>;
  templates: string[];
  template: string;
  setTemplate: (t: string) => void;
};

export default function Editor({ data, setData, labels, language, setLanguage, onDownload, templates, template, setTemplate }: Props) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">{labels.siteTitle}</h1>
        <div className="flex gap-3">
          <LanguageSwitch language={language} setLanguage={setLanguage} />
          <div className="flex gap-2">
            <button className="px-3 py-2 bg-green-600 text-white rounded text-sm" onClick={() => onDownload('en')}>📄 EN</button>
            <button className="px-3 py-2 bg-blue-600 text-white rounded text-sm" onClick={() => onDownload('pt-br')}>📄 PT‑BR</button>
          </div>
        </div>
      </div>

      <FormFields data={data} setData={setData} labels={labels.labels} templates={templates} template={template} setTemplate={setTemplate} />
    </div>
  );
}
