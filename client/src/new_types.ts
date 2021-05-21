/* ==============================================
 * =============== Utility Types ================
 * ==============================================
 */

import { User } from "./types";

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

export type Details = {
  bullets?: string[];
  date?: {
    end: Date | null;
    start: Date;
  };
  description?: string;
  location?: Location;
  skill?: Skill;
  subtitle?: string;
  title?: string;
};

export type Location = {
  city?: string;
  state?: string;
};

export type Section<T> = {
  description?: string;
  details?: T[];
  header?: string;
  type: Readonly<string>;
};

export type Skill = {
  type: string;
  level?: number;
};

/* ==============================================
 * ============== Specific Types ================
 * ==============================================
 */

export function isAboutMeSection(x: any): x is AboutMeSection {
  return x.type === "About Me";
}

export type AboutMeSection = Required<
  Pick<Section<undefined>, "description" | "header">
> &
  Readonly<{ type: "About Me" }>;

export function isEducationSection(x: any): x is EducationSection {
  return x.type === "Education";
}

export type EducationSection = Required<
  Pick<Section<EducationDetails>, "header" | "details">
> &
  Readonly<{ type: "Education" }>;

export type EducationDetails = Pick<
  Details,
  "bullets" | "date" | "description" | "location"
> &
  Rename<Details, "title" | "subtitle", "degree" | "school">;

export function isExperienceSection(x: any): x is ExperienceSection {
  return x.type === "Experience";
}

export type ExperienceSection = Required<
  Pick<Section<ExperienceDetails>, "header" | "details">
> &
  Readonly<{ type: "Experience" }>;

export type ExperienceDetails = Pick<
  Details,
  "bullets" | "date" | "description" | "location"
> &
  Rename<Details, "title" | "subtitle", "position" | "company">;

export function isSkillsSection(x: any): x is SkillsSection {
  return x.type === "Skills";
}

export type SkillsSection = Required<
  Pick<Section<SkillsDetails>, "header" | "details">
> &
  Readonly<{ type: "Skills" }>;

export type SkillsDetails = Pick<Details, "skill">;

export type Resume = {
  user: User;
  sections: Section<Details>[];
};

export function isValidSection(x: any) {
  return (
    isAboutMeSection(x) ||
    isEducationSection(x) ||
    isExperienceSection(x) ||
    isSkillsSection(x)
  );
}
