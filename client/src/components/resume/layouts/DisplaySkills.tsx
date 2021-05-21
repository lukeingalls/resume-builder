import { SkillsDetails } from "../../../new_types";

interface LevelChunkProps {
  filled?: boolean;
}

function LevelChunk({ filled = false }: LevelChunkProps) {
  return (
    <div
      className={`inline-block w-5 h-5 border mx-1 rounded-md border-gray-600 ${
        filled ? "bg-gray-500" : "bg-white"
      }`}
    />
  );
}

const renderLevels = (level: number) => {
  let chunks: React.ReactNode[] = [];
  for (let i = 1; i <= 5; i++) {
    chunks = [...chunks, <LevelChunk filled={i <= level} />];
  }
  return chunks;
};

interface SkillsBulletsProps {
  skills: SkillsDetails[] | undefined;
}

export default function SkillsBullets({ skills }: SkillsBulletsProps) {
  if (!skills) return null;
  return (
    <div className="grid grid-cols-12">
      {skills.map(({ skill }) => (
        <>
          {skill && (
            <>
              <span className="col-span-3" />
              <div className="col-span-9 flex items-center">
                {skill.level && renderLevels(skill.level)}
                <p className="pl-4">{skill.type}</p>
              </div>
            </>
          )}
        </>
      ))}
    </div>
  );
}
