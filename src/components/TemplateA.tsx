import React from 'react';
import { CVData } from '../types';

type Props = { data: CVData; labels: any };

export default function TemplateA({ data, labels }: Props) {
  return (
    <div className="text-gray-900" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}>
      <header className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">{data.name || 'Your Name'}</h1>
          <div className="text-sm text-gray-600 mt-1">{data.title || 'Job Title'}</div>
        </div>
        <div className="text-right text-sm text-gray-600">
          <div>{data.email}</div>
          <div>{data.phone}</div>
        </div>
      </header>

      <section className="mb-4">
        <h2 className="text-sm font-semibold text-gray-700 mb-2">{labels.summary}</h2>
        <div className="text-sm text-gray-800">{data.summary || 'Short professional summary...'}</div>
      </section>

      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="col-span-2">
          <section className="mb-4 page-break">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">{labels.experience}</h3>
            <div className="space-y-4">
              {data.experience.length ? data.experience.map((e, i) => (
                <div key={i} className="">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <div className="font-semibold">{e.role || 'Role'} — <span className="text-sm text-gray-600">{e.company || 'Company'}</span></div>
                      <div className="text-xs text-gray-500">{e.from} — {e.to}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-700 mt-1">{e.description}</div>
                </div>
              )) : <div className="text-sm text-gray-500">No experience yet.</div>}
            </div>
          </section>

          <section className="page-break">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">{labels.education}</h3>
            <div className="space-y-3">
              {data.education.length ? data.education.map((ed, i) => (
                <div key={i}>
                  <div className="font-medium">{ed.school || 'School'}</div>
                  <div className="text-xs text-gray-500">{ed.from} — {ed.to} · {ed.degree}</div>
                  <div className="text-sm text-gray-700 mt-1">{ed.description}</div>
                </div>
              )) : <div className="text-sm text-gray-500">No education yet.</div>}
            </div>
          </section>
        </div>

        <aside>
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700">{labels.skills}</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {data.skills.length ? data.skills.map((s, i) => (
                <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">{s}</span>
              )) : <div className="text-sm text-gray-500">No skills.</div>}
            </div>
          </div>
          {data.photo && (
            <div className="mt-4">
              <img src={data.photo} alt="photo" className="w-32 h-32 object-cover rounded" />
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
