"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NameCheck({ onAuthenticated }: { onAuthenticated: () => void }) {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.toLowerCase() === "panda") {
      onAuthenticated();
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className={`p-8 rounded-lg transition-colors ${error ? "animate-pulse bg-red-100" : "bg-white"}`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <h1 className="text-xl font-semibold text-center mb-6">
          This is for Stella Malone, what is her cute and fat black & white cat&apos;s name?
        </h1>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full"
          placeholder="Enter cat's name..."
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
        {error && (
          <p className="text-red-500 text-center">
            This page is not for you ❤️
          </p>
        )}
      </form>
    </div>
  );
}