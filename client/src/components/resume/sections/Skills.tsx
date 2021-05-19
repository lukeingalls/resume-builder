import { isSkills, SkillsSection } from "../../../new_types";
import SectionContainer from "@resume-themes/SectionContainer";

interface SkillsProps {
  skills: SkillsSection;
}

const renderLevels = (level: number) => {
  let chunks: React.ReactNode[] = [];
  for (let i = 1; i <= 5; i++) {
    chunks = [...chunks, <LevelChunk filled={i <= level} />];
  }
  return chunks;
};

function LevelChunk({ filled = false }: LevelChunkProps) {
  return (
    <div
      className={`inline-block w-5 h-5 border mx-1 rounded-md border-gray-600 ${
        filled ? "bg-gray-500" : "bg-white"
      }`}
    />
  );
}

interface LevelChunkProps {
  filled?: boolean;
}

function Skills({ skills }: SkillsProps) {
  return (
    <SectionContainer title={skills.type}>
      <div className="grid grid-cols-12">
        {skills.details.map((skill) => (
          <>
            {skill.bullets &&
              isSkills(skill.bullets) &&
              skill.bullets.map((bullet) => (
                <>
                  <span className="col-span-3" />
                  <div className="col-span-9 flex items-center">
                    {bullet.level && renderLevels(bullet.level)}
                    <p className="pl-4">{bullet.skill}</p>
                  </div>
                </>
              ))}
          </>
        ))}
      </div>
    </SectionContainer>
  );
}

export default Skills;
