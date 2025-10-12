import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container = ({children, className}: ContainerProps) => {
  return (
    <div className={`max-w-[1686px] px-4 md:px-7 mx-auto w-full ${className ?? ""}`}>
      {children}
    </div>
  );
};
