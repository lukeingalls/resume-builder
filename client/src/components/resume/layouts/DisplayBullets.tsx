interface DisplayBulletsProps {
  bullets: string[] | undefined;
}

export default function DisplayBullets({ bullets }: DisplayBulletsProps) {
  if (!bullets) return null;
  return (
    <ul>
      {bullets.map((bullet) => (
        <li className="list-disc list-item list-inside">{bullet}</li>
      ))}
    </ul>
  );
}
