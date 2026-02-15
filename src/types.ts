export type Experience = {
  company: string;
  role: string;
  from: string;
  to: string;
  description: string;
};

export type Education = {
  school: string;
  degree: string;
  from: string;
  to: string;
  description: string;
};

export type CVData = {
  name: string;
  title: string;
  email: string;
  phone: string;
  summary: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  photo?: string; // data URL or external URL
};
