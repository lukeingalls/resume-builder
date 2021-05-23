import { useRef } from "react";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function TextArea({
  className,
  onChange,
  ...rest
}: TextAreaProps) {
  const initialScrollHeight = useRef("");
  return (
    <textarea
      className={`block w-full ${className}`}
      onChange={(e) => {
        const textArea = e.target;
        if (!initialScrollHeight.current)
          initialScrollHeight.current = textArea.style.height;
        onChange?.(e);
        textArea.style.height = initialScrollHeight.current;
        textArea.style.height = `${textArea.scrollHeight}px`;
      }}
      {...rest}
    />
  );
}
