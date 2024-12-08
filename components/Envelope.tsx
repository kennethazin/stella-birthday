"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail as EnvelopeIcon, Heart } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button"; // Adjust the path as necessary

export default function Envelope() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex justify-center">
      <div
        className="cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <EnvelopeIcon
          size={400}
          className={`stroke-1 transition-transform duration-500 ${
            isOpen ? "rotate-[20deg]" : ""
          }`}
        />
      </div>

      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger />
        <DrawerContent className="h-full">
          <DrawerHeader>
            <DrawerTitle>Dear Boba, also known as Stella</DrawerTitle>
            <DrawerDescription className="text-black text-left mt-5">
              Happy Birthday to the most amazing person in the world! This is a special day and I&apos;m sorry I am not able
              to do anything super fancy (given the funds I have in this time of my life) but I hope this little gesture 
              will make you smile. After all, I&apos;m a software engineer at heart and my heart is yours. Too much of a corny sentence perhaps...
              Anywho. 
              <br /><br />
              I am so greatful to have spent another year with you and watch you grow into the amazing person you are today. As we said the other day, I&apos;ve pretty much
              known you for 3 of your ages (22, 23 and 24) despite only being together for 1 year which I think is so cool. But I have had the opportunity to see you
              grow into a beautiful person inside and out, even more than the woman I met last year. I am so proud of you and I am so happy to be able to call you my girlfriend.
              Here&apos;s to another year of love, laughter, and creating beautiful memories together.
              <br /><br />
              With all my love,<br />
              Kenneth
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <AnimatePresence>
        {isOpen && (
          <>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  x: Math.random() * 200 - 100,
                  y: [-50, -150],
                  scale: [1, 0.5],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                className="absolute top-32"
              >
                <Heart className="text-red-500" fill="red" />
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}