interface SectionContainerProps {
  children: React.ReactNode;
  title?: string;
}

export default function SectionContainer({
  children,
  title,
}: SectionContainerProps) {
  return (
    <div>
      <div>{title && <h3 className="text-lg font-bold">{title}</h3>}</div>
      <hr className="my-5" />
      {children}
    </div>
  );
}
