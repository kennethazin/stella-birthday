"use client";

import { useState } from "react";
import NameCheck from "@/components/NameCheck";
import BirthdayContent from "@/components/BirthdayContent";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      {!isAuthenticated ? (
        <NameCheck onAuthenticated={() => setIsAuthenticated(true)} />
      ) : (
        <BirthdayContent />
      )}
    </main>
  );
}
