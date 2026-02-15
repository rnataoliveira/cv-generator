import React from 'react';
import { CVData, Experience, Education } from '../types';

type Props = {
  data: CVData;
  setData: (d: CVData) => void;
  labels: any;
  templates: string[];
  template: string;
  setTemplate: (t: string) => void;
};

export default function FormFields({ data, setData, labels, templates, template, setTemplate }: Props) {
  const update = (patch: Partial<CVData>) => setData({ ...data, ...patch });

  const updateExperience = (i: number, next: Partial<Experience>) => {
    const exp = data.experience.slice();
    exp[i] = { ...exp[i], ...next };
    setData({ ...data, experience: exp });
  };

  const addExperience = () => setData({ ...data, experience: [...data.experience, { company: '', role: '', from: '', to: '', description: '' }] });
  const removeExperience = (i: number) => setData({ ...data, experience: data.experience.filter((_, idx) => idx !== i) });

  const updateEducation = (i: number, next: Partial<Education>) => {
    const edu = data.education.slice();
    edu[i] = { ...edu[i], ...next };
    setData({ ...data, education: edu });
  };
  const addEducation = () => setData({ ...data, education: [...data.education, { school: '', degree: '', from: '', to: '', description: '' }] });
  const removeEducation = (i: number) => setData({ ...data, education: data.education.filter((_, idx) => idx !== i) });

  const onPhotoChange = (file?: File) => {
    if (!file) return update({ photo: undefined });
    const fr = new FileReader();
    fr.onload = () => update({ photo: fr.result as string });
    fr.readAsDataURL(file);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-3 items-center">
        <div className="grow">
          <label className="block text-sm text-gray-600">{labels.name}</label>
          <input className="w-full border rounded px-3 py-2" value={data.name} onChange={e => update({ name: e.target.value })} />
        </div>
        <div className="w-36">
          <label className="block text-sm text-gray-600">{labels.template}</label>
          <select className="w-full border rounded px-2 py-2" value={template} onChange={e => setTemplate(e.target.value)}>
            {templates.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm text-gray-600">{labels.title}</label>
          <input className="w-full border rounded px-3 py-2" value={data.title} onChange={e => update({ title: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm text-gray-600">{labels.email}</label>
          <input className="w-full border rounded px-3 py-2" value={data.email} onChange={e => update({ email: e.target.value })} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm text-gray-600">{labels.phone}</label>
          <input className="w-full border rounded px-3 py-2" value={data.phone} onChange={e => update({ phone: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Photo</label>
          <input type="file" accept="image/*" className="w-full" onChange={e => onPhotoChange(e.target.files ? e.target.files[0] : undefined)} />
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-600">{labels.summary}</label>
        <textarea className="w-full border rounded px-3 py-2" rows={4} value={data.summary} onChange={e => update({ summary: e.target.value })} />
      </div>

      <div>
        <label className="block text-sm text-gray-600">{labels.skills}</label>
        <input className="w-full border rounded px-3 py-2" value={data.skills.join(', ')} onChange={e => update({ skills: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })} placeholder="e.g. JavaScript, React, SQL" />
      </div>

      <div>
        <div className="flex justify-between items-center">
          <label className="block text-sm text-gray-600">{labels.experience}</label>
          <button className="text-sm text-indigo-600" onClick={addExperience}>{labels.add}</button>
        </div>
        <div className="space-y-3 mt-2">
          {data.experience.map((exp, i) => (
            <div key={i} className="border rounded p-3">
              <div className="flex gap-2">
                <input className="flex-1 border rounded px-2 py-1" placeholder={labels.company} value={exp.company} onChange={e => updateExperience(i, { company: e.target.value })} />
                <input className="w-44 border rounded px-2 py-1" placeholder={labels.role} value={exp.role} onChange={e => updateExperience(i, { role: e.target.value })} />
              </div>
              <div className="flex gap-2 mt-2">
                <input className="border rounded px-2 py-1" placeholder={labels.from} value={exp.from} onChange={e => updateExperience(i, { from: e.target.value })} />
                <input className="border rounded px-2 py-1" placeholder={labels.to} value={exp.to} onChange={e => updateExperience(i, { to: e.target.value })} />
              </div>
              <textarea className="w-full border rounded px-2 py-1 mt-2" rows={2} placeholder={labels.description} value={exp.description} onChange={e => updateExperience(i, { description: e.target.value })} />
              <div className="text-right mt-2">
                <button className="text-sm text-red-600" onClick={() => removeExperience(i)}>{labels.remove}</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center">
          <label className="block text-sm text-gray-600">{labels.education}</label>
          <button className="text-sm text-indigo-600" onClick={addEducation}>{labels.add}</button>
        </div>
        <div className="space-y-3 mt-2">
          {data.education.map((edu, i) => (
            <div key={i} className="border rounded p-3">
              <div className="flex gap-2">
                <input className="flex-1 border rounded px-2 py-1" placeholder="School" value={edu.school} onChange={e => updateEducation(i, { school: e.target.value })} />
                <input className="w-44 border rounded px-2 py-1" placeholder="Degree" value={edu.degree} onChange={e => updateEducation(i, { degree: e.target.value })} />
              </div>
              <div className="flex gap-2 mt-2">
                <input className="border rounded px-2 py-1" placeholder={labels.from} value={edu.from} onChange={e => updateEducation(i, { from: e.target.value })} />
                <input className="border rounded px-2 py-1" placeholder={labels.to} value={edu.to} onChange={e => updateEducation(i, { to: e.target.value })} />
              </div>
              <textarea className="w-full border rounded px-2 py-1 mt-2" rows={2} placeholder={labels.description} value={edu.description} onChange={e => updateEducation(i, { description: e.target.value })} />
              <div className="text-right mt-2">
                <button className="text-sm text-red-600" onClick={() => removeEducation(i)}>{labels.remove}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
