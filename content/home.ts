import type {Fact, OpeningContent} from "./types";

const facts: Fact[] = [
  {label: "Curriculum", value: "Cambridge and Edexcel", verify: false, source: ["https://www.jadeeducation.org/home", "https://www.jadeeducation.org/careers"]},
  {label: "Location", value: "321 Galle Road, Colombo 04", verify: false, source: ["https://www.jadeeducation.org/contact-us"]},
  {label: "Entry stages", value: "Preschool, primary, IGCSE and A Levels", verify: false, source: ["https://www.jadeeducation.org/school-admission", "https://jadepreschool.com/"]},
  {label: "Next open day", value: null, verify: true, source: [], note: "No verified future date. Omit this field."},
];

export const home: OpeningContent = {
  meta: {title: "Jade International School | Colombo", description: "Workshop-style learning at Jade International School in Colombo. Explore preschool and primary, Cambridge and Edexcel IGCSE and A Levels, and Fast Track A Levels."},
  sections: {hero: true, information: true, startHere: true, restOfHome: false},
  hero: {
    title: "Workshop-style learning at Jade.",
    description: "Jade uses circular tables and glass-walled classrooms for workshop-style lessons in Colombo.",
    action: {label: "Book a tour", href: "/visit"},
    image: {src: "/media/jade-glass-classroom.jpg", alt: "A teacher and students discussing work beside a glass classroom board, with a circular table in the foreground at Jade", label: "A classroom discussion at Jade, with work written on the glass board.", position: "50% 64%"},
  },
  information: {label: "School information", facts},
  startHere: {
    title: "Start here",
    description: "Find the information for the stage you are considering.",
    entries: [
      {title: "Starting school", description: "Preschool and primary", href: "/starting-school", linkLabel: "Preschool and primary admissions", image: {src: "/media/jade-preschool-painting.jpg", alt: "A child painting with a brush at Jade Preschool", label: "Painting at Jade Preschool.", position: "50% 45%"}, details: [
        {label: "Entry age", value: null, verify: true, source: [], note: "Confirm entry ages with Jade."},
        {label: "Qualification", value: null, verify: true, source: [], note: "Primary curriculum not verified."},
      ], nextStep: "Ask about a place and arrange a visit."},
      {title: "IGCSE and A Levels", description: "Moving into examination years", href: "/igcse-and-a-levels", linkLabel: "Explore IGCSE and A Levels", details: [
        {label: "Qualifications", value: "Cambridge and Edexcel IGCSE and A Levels", verify: false, source: ["https://www.jadeeducation.org/careers"]},
        {label: "Entry requirements", value: null, verify: true, source: []},
      ], nextStep: "Discuss subjects and entry requirements with admissions."},
      {title: "Fast Track A Levels", description: "A Levels in one year", href: "/fast-track-a-levels", linkLabel: "Explore Fast Track A Levels", details: [
        {label: "Qualification", value: "A Levels", verify: false, source: ["https://www.jadeeducation.org/fast-track-a-levels"]},
        {label: "Entry requirements", value: null, verify: true, source: []},
      ], nextStep: "Talk through the one-year programme with Jade."},
    ],
  },
};

export const pendingHomeSections = {
  teachingApproach: {enabled: false, verify: true},
  studentLife: {enabled: false, verify: true},
  statistics: {enabled: false, verify: true},
  outcomes: {enabled: false, verify: true},
  news: {enabled: false, verify: true},
  enquiries: {enabled: false, verify: true},
  cambridgeApprovalYear: {value: "2025", verify: true},
} as const;
