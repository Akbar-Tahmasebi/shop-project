import React from "react";
import Navbar from "./Navbar";

interface ILaoute {
  children: React.ReactNode;
}

function Laoute({ children }: ILaoute) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Laoute;
