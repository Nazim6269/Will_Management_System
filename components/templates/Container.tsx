import React from "react";

const Container = ({
  children,
  className="",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`max-w-400 mx-auto w-full px-4 md:px-10 xl:px-47 ${className}`}>{children}</div>;
};

export default Container;
