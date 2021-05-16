export type Activity = {
  description: string;
  end_date: Date | null;
  start_date: Date;
  title: string;
  bullets: string[];
};

export type Resume = {
  summary: string;
  sections: Sections[];
  user: User;
};

export type Sections = {
  title: string;
  activities: Activity[];
};

export type User = {
  address: {
    city: string;
    state: string;
  };
  email: string;
  phone_number: string;
  name: string;
};
