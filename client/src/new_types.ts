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

export type TDetails = {
  bullets?: string[];
  date?: {
    end: Date | null;
    start: Date;
  };
  description?: string;
  location?: TLocation;
  skill?: Skill;
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

export type Skill = {
  type: string;
  level?: number;
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
  user: User;
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
