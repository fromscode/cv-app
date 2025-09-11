const ProfessionalObj = {
  summary:
    "Genius, billionaire, playboy, philanthropist. Founder and CEO of Stark Industries. Leading innovator in advanced weapons tech, clean energy, and artificial intelligence. Founding member of the Avengers Initiative. Occasional savior of the planet. Suave public speaker. Absolute legend.",
  jobs: [
    {
      id: crypto.randomUUID(),
      companyName: "Stark Industries",
      jobTitle: "Founder, CEO & Chief Technological Visionary",
      startDate: "Jan-2005",
      endDate: "Present",
      jobPoints: [
        {
          id: crypto.randomUUID(),
          point:
            "Designed and deployed J.A.R.V.I.S., an AI so advanced it occasionally questions my life choices.",
        },
        {
          id: crypto.randomUUID(),
          point:
            "Pioneered the Iron Man suit series from Mark I (cobbled in a cave) to Mark LXXXV (nano-tech perfection). Spoiler: No cavemen were harmed in the process.",
        },
        {
          id: crypto.randomUUID(),
          point:
            "Transitioned Stark Industries from weapons manufacturing to clean energy and high-tech solutions. Because the future shouldn’t be a war zone.",
        },
        {
          id: crypto.randomUUID(),
          point:
            "Founded the Avengers Initiative to assemble Earth's mightiest heroes. Basically, an exclusive club where the dress code is saving the world.",
        },
        {
          id: crypto.randomUUID(),
          point:
            "Single-handedly neutralized rogue AI threats (including that one time Ultron almost ruined everything). Crisis management is my cardio.",
        },
      ],
    },
  ],
};

export default ProfessionalObj;
