import React from "react";

interface IProps {
  children: React.ReactNode;
}

const Test: React.FC<IProps> = ({ children }) => {
  return <div>{children}</div>;
};


export default Test;
