import { useLayoutEffect, useRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({
  className,
  onChange,
  style,
  ...rest
}: InputProps) {
  const input = useRef<HTMLInputElement | null>(null);
  const MIN_WIDTH = 100;

  useLayoutEffect(() => {
    if (input.current) {
      input.current.style.width = `${input.current.scrollWidth}px`;
    }
  }, []);

  return (
    <input
      className={`${className || ""}`}
      style={{
        ...style,
        width: MIN_WIDTH,
      }}
      onChange={(e) => {
        const input = e.target;
        onChange?.(e);
        input.style.width = "5px";
        input.style.width = `${
          input.scrollWidth >= MIN_WIDTH ? input.scrollWidth : MIN_WIDTH
        }px`;
      }}
      ref={input}
      {...rest}
    />
  );
}
