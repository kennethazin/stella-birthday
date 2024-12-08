"use client";

import { useState } from "react";

export default function LoveNotes() {
  const loveNotes = [
    "The way your eyes sparkle when you laugh",
    "How caring and gentle you are with Panda",
    "Your incredible strength and determination",
    "The way you dance when you're happy and excited",
    "Your smile and the scent of your arm pits",
    "How you always know how to make me feel better",
    "The way you HAVE to wear gloves when washing dishes, so cute",
    "The way you encourage me to be the best version of myself",
    "I love how you don't paint so often, but when you do it's mf amazing",
    "How you always know how to make me feel better and take care of me when I'm down and how you KNOW when something is off",
    "How you make me delicious coffee most mornings",
    "How you want this one yoghurt in a small glass jar whenever we go to Tesco",
    "I love when you hold my arm when we're walking",
    "I love it when I'm driving and you remove your shoes and cross your legs together, idk its so adorable",
    "Your humour. You're unnaturally funny and I love it",
    "The way you love me for who I am. But still encourage me to be my best self.",
    "I love the way you ask me to brush your hair with that one detangler.",
    "When we're getting ready in the morning and you're so tired that you lay down on your back and you ask me to help you put on your clothes (you're horizontal btw).",
  ];

  const [currentNote, setCurrentNote] = useState(() => {
    return loveNotes[Math.floor(Math.random() * loveNotes.length)];
  });

  return (
    <div className="p-6 text-center">
      <p className="text-xl font-medium text-gray-800">
        {currentNote} ❤️
      </p>
    </div>
  );
}