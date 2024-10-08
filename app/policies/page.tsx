import React from "react";
import Policies from "@/components/pages/policies/policy";
import Navbar from "@/components/layout/navbar";

export default function PolicyPage() {
  return (
    <div>
      <div className="bg-[#160E0D]">
        <Navbar />
      </div>
      <Policies />
    </div>
  );
}
