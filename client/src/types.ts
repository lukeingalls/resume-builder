/* ==============================================
 * =============== Utility Types ================
 * ==============================================
 */

// https://stackoverflow.com/a/52702528/14034323
type Rename<T, K extends keyof T, N extends string> = Pick<
  T,
  Exclude<keyof T, K>
> &
  { [P in N]: T[K] };

/* ==============================================
 * =============== Generic Types ================
 * ==============================================
 */

export type TAddress = {
  city: string;
  country?: string;
  state: string;
  street_address: string;
  zip: string;
};

export type TContactInfo = {
  email: string;
  links: Array<{ site: string; url: string }>;
  phone_number: string;
};

export type TDetails = {
  bullets?: string[];
  date?: {
    end: Date | null;
    start: Date;
  };
  description?: string;
  location?: TLocation;
  skill?: TSkill;
  subtitle?: string;
  title?: string;
};

export type TLocation = {
  city?: string;
  state?: string;
};

export type TSection<T> = {
  description?: string;
  details?: T[];
  header?: string;
  type: Readonly<string>;
};

export type TSkill = {
  type: string;
  level?: number;
};

export type TUser = {
  address: TAddress;
  contact_info: TContactInfo;
  current_title: string;
  name: string;
};

/* ==============================================
 * ============== Specific Types ================
 * ==============================================
 */

export function isAboutMeSection(x: any): x is TAboutMeSection {
  return x.type === "About Me";
}

export type TAboutMeSection = Required<
  Pick<TSection<undefined>, "description" | "header">
> &
  Readonly<{ type: "About Me" }>;

export function isEducationSection(x: any): x is TEducationSection {
  return x.type === "Education";
}

export type TEducationSection = Required<
  Pick<TSection<TEducationDetails>, "header" | "details">
> &
  Readonly<{ type: "Education" }>;

export type TEducationDetails = Pick<
  TDetails,
  "bullets" | "date" | "description" | "location"
> &
  Rename<TDetails, "title" | "subtitle", "degree" | "school">;

export function isExperienceSection(x: any): x is TExperienceSection {
  return x.type === "Experience";
}

export type TExperienceSection = Required<
  Pick<TSection<TExperienceDetails>, "header" | "details">
> &
  Readonly<{ type: "Experience" }>;

export type TExperienceDetails = Pick<
  TDetails,
  "bullets" | "date" | "description" | "location"
> &
  Rename<TDetails, "title" | "subtitle", "position" | "company">;

export function isSkillsSection(x: any): x is TSkillsSection {
  return x.type === "Skills";
}

export type TSkillsSection = Required<
  Pick<TSection<TSkillsDetails>, "header" | "details">
> &
  Readonly<{ type: "Skills" }>;

export type TSkillsDetails = Pick<TDetails, "skill">;

export type TResume = {
  user: TUser;
  sections: TSection<TDetails>[];
};

export function isValidSection(x: any) {
  return (
    isAboutMeSection(x) ||
    isEducationSection(x) ||
    isExperienceSection(x) ||
    isSkillsSection(x)
  );
}
