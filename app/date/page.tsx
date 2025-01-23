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
import { MapPinCheckIcon } from "lucide-react";
type DateOption = {
  title: string;
  description: string;
  details: string;
  link?: string;
};

const brunchOptions: DateOption[] = [
  {
    title: "Town",
    description: "Tang (Pearse Street)",
    link: "https://www.google.com/maps/place/Tang+(Cumberland+Place)/@53.3417274,-6.2484815,10z/data=!4m10!1m2!2m1!1stang!3m6!1s0x48670f0c214b8325:0x172d5f6999b99cda!8m2!3d53.3417274!4d-6.2484815!15sCgR0YW5nWgYiBHRhbmeSARltaWRkbGVfZWFzdGVybl9yZXN0YXVyYW504AEA!16s%2Fg%2F11sy_7wnqx?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D",
    details:
      "Have brunch in Tang in Cumberland Place near Pearse Street, then go to Temple Bar to visit Design Lane. Window shopping then head home.",
  },
  {
    title: "Dun Laoghaire",
    description: "Happy Out & Pier Walk",
    link: "https://www.google.com/maps/place/Happy+Out+%C3%97+Together+Academy/@53.3417274,-6.2484815,10z/data=!4m6!3m5!1s0x486707d5f131ddcd:0x6b3811d04c1b33b5!8m2!3d53.2909231!4d-6.127901!16s%2Fg%2F11sw0zzc1g?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D",
    details:
      "Enjoy brunch at Happy Out, then take a romantic walk around the pier in the rain with an umbrella",
  },
  {
    title: "Sallins",
    description: "Hey Darling",
    link: "https://www.google.com/maps/place/Hey+Darling+Sallins/@53.2489199,-6.6751394,15z/data=!3m1!4b1!4m6!3m5!1s0x486779eaffd9a42b:0x4f985d55eba0ce2!8m2!3d53.2489203!4d-6.6648397!16s%2Fg%2F11wtph97d4?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D",
    details: "Simple brunch and walk to Hey Darling close to home",
  },
  {
    title: "Kildare",
    description: "Dubh",
    link: "https://www.google.com/maps/place/Dubh/@53.1815788,-6.8082414,15z/data=!3m1!4b1!4m6!3m5!1s0x485d7fe3c2bee469:0x3fbc9190e5d21aee!8m2!3d53.1815792!4d-6.7979417!16s%2Fg%2F11c37gml1k?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D",
    details: "Have a lovely brunch at Dubh in Kildare",
  },

  {
    title: "Maynooth",
    description: "Sasta by the River",
    link: "https://www.google.com/maps/place/S%C3%A1sta+By+The+River+Maynooth/@53.3818041,-6.6042113,15z/data=!3m1!4b1!4m6!3m5!1s0x48676f34b4054f7d:0x39bd5600a709001e!8m2!3d53.3818045!4d-6.5939116!16s%2Fg%2F11k0mzzdld?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D",
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
    <div className="min-h-screen text-black flex items-center justify-center p-4 bg-pink-300">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Date Options ♥️
          </CardTitle>
          <CardDescription className="text-center text-base">
            Thursday, 23 Jan 2025. It&apos;s a rainy day today and I know you
            must be tired from shooting the film yesterday. Thus, I've curated 5
            brunch date options for us to choose from. If boba too tired, I will
            make you lunch at home.
          </CardDescription>
          <div className="flex items-center justify-center space-x-2 pt-4">
            <Switch
              id="meal-toggle"
              checked={isBrunch}
              onCheckedChange={setIsBrunch}
            />
            <Label htmlFor="meal-toggle">{isBrunch ? "Brunch" : ""}</Label>
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
                <a
                  className="text-xs underline items-center flex"
                  href={option.link}
                  target="_blank"
                >
                  Google Maps <MapPinCheckIcon size={16} />
                </a>
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
