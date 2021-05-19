import SectionContainer from "@resume-themes/SectionContainer";
import { AboutMeSection } from "../../../new_types";

interface AboutMeProps {
  about_me: AboutMeSection;
}

function AboutMe({ about_me }: AboutMeProps) {
  return (
    <SectionContainer title={about_me.header}>
      <p>{about_me.description}</p>
    </SectionContainer>
  );
}

export default AboutMe;
