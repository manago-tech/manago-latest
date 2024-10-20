import React from "react";
import KitchenEquipment from "@/components/pages/services/kitchen-equipment/page";
import Navbar from "@/components/layout/navbar-black";
import Footer from "@/components/sections/footer";

export default function RestoEstatePage() {
  return (
    <div>
      <Navbar />
      <KitchenEquipment />
      <Footer />
    </div>
  );
}
