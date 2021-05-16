export type Address = {
  city: string;
  country: string;
  state: string;
  street_address: string;
  zip: string;
};

export type Award = {
  award: string;
};

export type BulletPoints = string[];

export type ContactInfo = {
  email: string;
  github: URL;
  linkedin: URL;
  personal_site: URL;
  phone_number: string;
};

export type Education = {
  bullets: BulletPoints;
  degree: string;
  end_date: Date;
  start_date: Date;
  university: string;
};

export type Experience = {
  bullets: BulletPoints;
  company: string;
  end_date: Date | null;
  location: string;
  position: string;
  start_date: Date;
};

export type GenericSection = {
  title: string;
  items: GenericItem[];
};

export type GenericItem = {
  bullets?: BulletPoints[];
  description?: string;
  title: string;
};

export type Resume = {
  user: User;
  about_me: {
    description: string;
  };
  awards?: Award[];
  education: Education[];
  experience: Experience[];
  additional_sections?: GenericSection[];
  highlights?: BulletPoints;
  interests?: BulletPoints;
  skills: Skills[];
};

export type Skills = {
  skill: string;
  level?: number;
};

export type User = {
  address: Address;
  contact_info: ContactInfo;
  current_title: string;
  name: string;
};
