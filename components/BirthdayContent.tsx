"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Envelope from "@/components/Envelope";
import LoveNotes from "@/components/LoveNotes";
import Image from "next/image";
import happyBirthdayImage from "../components/assets/happy-birthday.png";

export default function BirthdayContent() {
  return (
    <div className="w-full max-w-4xl p-8 space-y-10 flex flex-col">
      <div className="text-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button className=" rounded-full pt-2 bg-white text-black border border-black hover:text-white font-mono">
              Click for a reason why I love you
            </Button>
          </DialogTrigger>
          <DialogContent className="rounded-md">
            <LoveNotes />
          </DialogContent>
        </Dialog>
      </div>
      <a className="text-center hover:underline" href="/date">
        Goodmorning boba🧋 Click for today&apos;s brunch date options
      </a>
      {/* <Envelope /> */}
    </div>
  );
}
