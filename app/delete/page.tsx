import React from "react";
import Delete from "@/components/pages/delete/delete";
import Navbar from "@/components/layout/navbar";

import Footer from "@/components/sections/footer";
export default function PolicyPage() {
  return (
    <div>
      <div className="bg-[#160E0D]">
        <Navbar />
      </div>
      <Delete />
      <Footer />
    </div>
  );
}
