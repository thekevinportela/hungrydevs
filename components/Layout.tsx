import React from "react";
import { Header } from "./";

export type ILayoutProps = {
  children: any;
};

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export { Layout };
