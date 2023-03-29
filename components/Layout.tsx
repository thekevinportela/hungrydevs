import React from "react";
import { Header } from "./";
import { Footer } from "./Footer";

export type ILayoutProps = {
  children: any;
};

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1 flex-col">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export { Layout };
