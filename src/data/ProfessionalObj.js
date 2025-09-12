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
            "Founded the Avengers Initiative to assemble Earth's mightiest heroes. Basically, an exclusive club where the dress code is saving the world.",
        },
      ],
    },
  ],
};

export default ProfessionalObj;
