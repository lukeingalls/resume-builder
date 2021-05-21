interface DetailsContainerProps {
  children?: React.ReactNode;
  [x: string]: any;
}

export default function DetailsContainer({
  children,
  education,
  type,
  ...rest
}: DetailsContainerProps) {
  return (
    <div className="grid grid-cols-12" {...rest}>
      {children}
    </div>
  );
}
