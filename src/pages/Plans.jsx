import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Plans() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex">
      <Sidebar open={open} setOpen={setOpen} />
    </div>
  );
}
