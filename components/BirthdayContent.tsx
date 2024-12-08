"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Envelope from "@/components/Envelope";
import LoveNotes from "@/components/LoveNotes";

export default function BirthdayContent() {
  return (
    <div className="w-full max-w-4xl p-8 space-y-10">
      
      <div className="text-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="animate-pulse">
              Click for a reason why I love you ❤️
            </Button>
          </DialogTrigger>
          <DialogContent>
            <LoveNotes />
          </DialogContent>
        </Dialog>
      </div>
      <Envelope />

    </div>
  );
}