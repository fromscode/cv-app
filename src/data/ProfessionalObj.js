const ProfessionalObj = {
  summary:
    "Senior Software Engineer with 500 years of experience in various domains.",
  jobs: [
    {
      id: crypto.randomUUID(),
      companyName: "Stark Industries",
      jobTitle: "Senior Software Engg",
      startDate: "Jan-1882",
      endDate: "Dec-1992",
      jobPoints: [
        { id: crypto.randomUUID(), point: "Core maintainer of Jarvis" },
        {
          id: crypto.randomUUID(),
          point:
            "Lead development of all blueprints from Mark-4 to Mark-50 end to end",
        },
        { id: crypto.randomUUID, point: "Built nano-tech suits" },
      ],
    },
  ],
};

export default ProfessionalObj;
