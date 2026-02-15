import React from 'react';
import { CVData } from '../types';

type Props = { data: CVData; labels: any };

export default function TemplateB({ data, labels }: Props) {
  return (
    <div className="text-gray-900" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}>
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">{data.name || 'Your Name'}</h1>
        <div className="text-sm text-gray-600">{data.title}</div>
        <div className="text-sm text-gray-600 mt-2">{data.email} · {data.phone}</div>
      </div>

      <section className="mb-4">
        <h2 className="text-sm font-semibold text-gray-700 mb-2">{labels.summary}</h2>
        <div className="text-sm text-gray-800">{data.summary}</div>
      </section>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2">{labels.experience}</h3>
          <div className="space-y-3">
            {data.experience.length ? data.experience.map((e, i) => (
              <div key={i} className="">
                <div className="font-semibold">{e.role}</div>
                <div className="text-xs text-gray-500">{e.company} · {e.from}—{e.to}</div>
                <div className="text-sm text-gray-700 mt-1">{e.description}</div>
              </div>
            )) : <div className="text-sm text-gray-500">No experience.</div>}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2">{labels.education}</h3>
          <div className="space-y-3">
            {data.education.length ? data.education.map((ed, i) => (
              <div key={i}>
                <div className="font-medium">{ed.school}</div>
                <div className="text-xs text-gray-500">{ed.degree} · {ed.from}—{ed.to}</div>
                <div className="text-sm text-gray-700 mt-1">{ed.description}</div>
              </div>
            )) : <div className="text-sm text-gray-500">No education.</div>}

            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-700">{labels.skills}</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {data.skills.length ? data.skills.map((s, i) => (
                  <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">{s}</span>
                )) : <div className="text-sm text-gray-500">No skills.</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
