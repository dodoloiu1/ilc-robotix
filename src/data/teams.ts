export type Division = {
  id: string;
  name: string;
  focus: string;
  description: string;
  skills: string[];
};

export const DIVISIONS: Division[] = [
  {
    id: "hardware",
    name: "Hardware",
    focus: "Mechanical design & fabrication",
    description:
      "CAD in Onshape, CNC and 3D printing, drivetrain geometry, and the machined chassis that survives match after match.",
    skills: ["Onshape CAD", "3D printing", "CNC machining", "Drivetrain design"],
  },
  {
    id: "software",
    name: "Software",
    focus: "Autonomous, control & vision",
    description:
      "FTC SDK op-modes, Road Runner trajectories, Limelight pipelines and the telemetry stack that logs every match.",
    skills: ["Java / Kotlin", "FTC SDK", "Road Runner", "OpenCV"],
  },
  {
    id: "pr",
    name: "PR & Marketing",
    focus: "Brand, outreach & partnerships",
    description:
      "Social media, sponsorship outreach, photography and the storytelling that brings Romanian STEM to a wider audience.",
    skills: ["Social media", "Sponsorship", "Photography", "Copywriting"],
  },
];

export const HERITAGE = {
  school: "Colegiul Național „Ion Luca Caragiale”",
  city: "Bucharest, Romania",
  program: "Nație Prin Educație / FTC Romania",
  since: "2021",
};
