import { Footer } from "@/components/footer";
import Navbar from "@/components/Home/navbar";

import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
