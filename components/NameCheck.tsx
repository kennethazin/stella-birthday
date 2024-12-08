"use client";

import React, { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import panda from "@/components/assets/panda.png";
import Image from "next/image";

export default function NameCheck({ onAuthenticated }: { onAuthenticated: () => void }) {
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.toLowerCase() === 'correct name') {
      setError(false);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    const targetDate = new Date('2024-12-09T00:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft('');
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const currentDate = new Date();
  const targetDate = new Date('2024-12-09');

  if (
    currentDate.getFullYear() !== targetDate.getFullYear() ||
    currentDate.getMonth() !== targetDate.getMonth() ||
    currentDate.getDate() !== targetDate.getDate()
  ) {
    return (
      <div className="p-8 rounded-lg bg-white">
        <h1 className="text-xl font-semibold text-center mb-6">
          Countdown to Boba&apos;s birthday:
        </h1>
        <p className="text-center text-2xl">{timeLeft}</p>
      </div>
    );
  }

  return (
    <div className={`p-8 rounded-lg transition-colors ${error ? "animate-pulse bg-red-100" : "bg-white"}`}>
      <Image src={panda} alt="Panda" width={200} height={200} className="rounded-full mx-auto mb-10" />
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
          <p className="text-red-900 text-center">
            This page is not for you!
          </p>
        )}
      </form>
    </div>
  );
}