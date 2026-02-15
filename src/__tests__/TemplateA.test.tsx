import React from 'react';
import { render, screen } from '@testing-library/react';
import TemplateA from '../components/TemplateA';
import { CVData } from '../types';

const sample: CVData = {
  name: 'Alice Example',
  title: 'Frontend Engineer',
  email: 'alice@example.com',
  phone: '+1 555 555',
  summary: 'Experienced dev',
  skills: ['React', 'TypeScript'],
  experience: [
    { company: 'Acme', role: 'Dev', from: '2020', to: '2022', description: 'Built stuff' }
  ],
  education: [
    { school: 'Uni', degree: 'BSc', from: '2010', to: '2014', description: '' }
  ],
  photo: undefined,
};

test('TemplateA renders main CV fields', () => {
  render(<TemplateA data={sample} labels={{ summary: 'Summary', experience: 'Experience', education: 'Education', skills: 'Skills' }} />);
  expect(screen.getByText(/Alice Example/i)).toBeInTheDocument();
  expect(screen.getByText(/Frontend Engineer/i)).toBeInTheDocument();
  expect(screen.getByText(/Acme/i)).toBeInTheDocument();
  expect(screen.getByText(/React/i)).toBeInTheDocument();
});
