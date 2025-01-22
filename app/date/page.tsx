"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

type DateOption = {
  title: string;
  description: string;
  details: string;
};

const brunchOptions: DateOption[] = [
  {
    title: "Town",
    description: "Tang (Near Pearse Street)",
    details:
      "Have brunch in Tang in Cumberland Place near Pearse Street, then go to Temple Bar to visit Design Lane. Window shopping then head home.",
  },
  {
    title: "Dun Laoghaire",
    description: "Happy Out & Pier Walk",
    details:
      "Enjoy brunch at Happy Out, then take a romantic walk around the pier in the rain with an umbrella",
  },
  {
    title: "Kildare",
    description: "Dubh",
    details: "Have a lovely brunch at Dubh in Kildare",
  },
  {
    title: "Maynooth",
    description: "Sasta by the River",
    details: "Nice for a rainy day",
  },
];

const lunchOptions: DateOption[] = [
  {
    title: "City Centre",
    description: "",
    details: ".",
  },
];

export default function DateOptionPicker() {
  const [isBrunch, setIsBrunch] = useState(true);
  const [selectedOption, setSelectedOption] = useState<DateOption | null>(null);

  const dateOptions = isBrunch ? brunchOptions : lunchOptions;

  return (
    <div className="min-h-screen text-black flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Date Options
          </CardTitle>
          <CardDescription className="text-center text-lg">
            Thursday, 23 Jan 2025
          </CardDescription>
          <div className="flex items-center justify-center space-x-2 pt-4">
            <Switch
              id="meal-toggle"
              checked={isBrunch}
              onCheckedChange={setIsBrunch}
            />
            <Label htmlFor="meal-toggle">{isBrunch ? "Brunch" : "Lunch"}</Label>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {dateOptions.map((option, index) => (
              <Button
                key={index}
                variant={selectedOption === option ? "default" : "outline"}
                className="h-auto py-4 text-left flex flex-col items-start"
                onClick={() => setSelectedOption(option)}
              >
                <span className="font-bold">{option.title}</span>
                <span className="text-sm">{option.description}</span>
              </Button>
            ))}
          </div>
          {selectedOption && (
            <Card>
              <CardHeader>
                <CardTitle>{selectedOption.title}</CardTitle>
                <CardDescription>{selectedOption.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{selectedOption.details}</p>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
