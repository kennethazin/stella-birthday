import React, { useState, useEffect } from "react";

const loveNotes = [
  "Your incredible strength and determination",
  "The way you dance when you're happy and excited",
  "Your smile and the scent of your arm pits",
  "How you always know how to make me feel better",
  "The way you HAVE to wear gloves when washing dishes, so cute",
  "The way you encourage me to be the best version of myself",
  "I love how you don't paint so often, but when you do it's mf amazing",
  "How you always know how to make me fe  git remote set-url origin git@github.com:kennethazin/stella-birthday.gitel better and take care of me when I'm down and how you KNOW when something is off",
  "How you make me delicious coffee most mornings",
  "How you want this one yoghurt in a small glass jar whenever we go to Tesco",
  "I love when you hold my arm when we're walking",
  "I love it when I'm driving and you remove your shoes and cross your legs together, it is weirdly cute",
  "Your humour. You're unnaturally funny and I love it",
  "The way you love me for who I am. But still encourage me to be my best self.",
  "I love the way you ask me to brush your hair with that one detangler.",
  "When we're getting ready in the morning and you're so tired that you lay down on your back and you ask me to help you put on your clothes (you're horizontal btw).",
  "I love it when we're cooking together",
  "I love it when you're sitting on the dining table doing work and watching me cook",
  "I love it when you make me cofee in the morning",
  "I love when we're in bed and you scoot over and lay on my chest",
  "I love when you hug my arm when we're walking",
  "I love the warmth of your hands when I'm cold",
  "I love when you slap my bum bum",
  "I love it when you ask me to brush your hair or dry it with the blow dryer",
  "It makes me happy when I walk past a room and you're so focused on your work",
  "I love filling up your water bottle everyday",
  "I love how you messy you can be, because I'll always be there to clean up after you. In a way, it's comforting.",
  "I love the way you look at me when you're proud of me",
  "I love the way you try and involve yourself in my hobbies",
  "I love watching Solo Levelling with you",
  "I love your passion for content creation and creating YouTube videos. It's inspiring and I'm so proud of you.",
  "I love how you're always trying to better yourself",
  "I love how you always help me better myself, like doing those dance routines, or helping me with stretches, or even just encouraging me to do better",
];

function LoveNotes() {
  const [currentNote, setCurrentNote] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const storedDate = localStorage.getItem("loveNoteDate");
    const storedNote = localStorage.getItem("loveNote");

    if (storedDate === today && storedNote) {
      setCurrentNote(storedNote);
      setTimeRemaining(
        24 * 60 * 60 -
          (new Date().getTime() - new Date(storedDate).getTime()) / 1000
      );
    } else {
      const newNote = loveNotes[Math.floor(Math.random() * loveNotes.length)];
      setCurrentNote(newNote);
      localStorage.setItem("loveNoteDate", today);
      localStorage.setItem("loveNote", newNote);
      setTimeRemaining(24 * 60 * 60);
    }

    const interval = setInterval(() => {
      setTimeRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 text-center">
      <p className="text-xl font-medium text-gray-800">{currentNote} ❤️</p>
      <p className="text-sm text-gray-600 mt-10">
        {`My next reason why I love you will be available in ${Math.floor(
          timeRemaining / 3600
        )}h ${Math.floor((timeRemaining % 3600) / 60)}m ${Math.floor(
          timeRemaining % 60
        )}s`}
      </p>
    </div>
  );
}

export default LoveNotes;
