import type { HomeContent } from "./types";
// Historical Phase 1 draft. Not imported by any route. All facts require re-verification before reuse.
export const publication = {enabled: false, verify: true} as const;

const archiveLabel = "Jade archive · placeholder photography";
export const home: HomeContent = {
  meta: {
    title: "Jade International School — A mind of your own",
    description: "Discover Jade International School in Colombo. Explore the school's participative approach to learning, academic pathways and student life, then plan a visit.",
  },
  hero: {
    eyebrow: "An education with possibility",
    title: ["A mind of", "your own."],
    italic: "your own.",
    description: "Room to question. Confidence to try.\nAn education that goes beyond the answer.",
    primary: {label: "Discover Jade", href: "#the-jade-approach"},
    secondary: {label: "Come and see for yourself", href: "#enquire"},
    location: "Colombo, Sri Lanka",
    footnote: "Independent thinking. Shared possibility.",
    image: {src: "/media/hero-placeholder.webp", alt: "Students at Jade International School working together on a chemistry experiment", label: archiveLabel, position: "60% center"},
    video: null,
  },
  statement: {
    eyebrow: "The Jade approach",
    text: "The world needs more than good answers. It needs curious minds, brave ideas and people who care.",
    description: "At Jade, learning is a conversation. Students explore ideas together, connect knowledge to the world around them, and find the confidence to contribute.",
    link: {label: "What makes us Jade", href: "#why-jade"},
    note: "Knowledge. Character. Possibility.",
  },
  why: {
    eyebrow: "Why Jade",
    title: "More room\nto become.",
    image: {src: "/media/learning-placeholder.webp", alt: "A practical science lesson with Jade students collaborating around an experiment", label: archiveLabel, position: "46% center"},
    pillars: [
      {number: "01", title: "Learning, in the real world.", description: "Workshop-style lessons turn listening into participation. There is space to ask, discuss and understand the thinking behind an answer."},
      {number: "02", title: "Character, in the making.", description: "From the classroom to the court, students practise working together, taking responsibility and finding their voice."},
      {number: "03", title: "A future, on your terms.", description: "Explore academic pathways with the admissions team and talk through the subjects and ambitions that matter to your family."},
    ],
  },
  programmes: {
    eyebrow: "Academic pathways",
    title: "Every chapter\nopens a new one.",
    description: "A clear next step begins with a conversation about where your child is now — and where they want to go.",
    items: [
      {number: "01", name: "Primary", description: "A foundation for curiosity.", detail: "[TODO: confirm primary grades, ages and curriculum]", href: "#enquire"},
      {number: "02", name: "Secondary", description: "Ideas become understanding.", detail: "[TODO: confirm secondary grades and current subject options]", href: "#enquire"},
      {number: "03", name: "IGCSE & A Levels", description: "Make room for what comes next.", detail: "Cambridge & Edexcel pathways · [TODO: confirm current offerings]", href: "#enquire"},
      {number: "04", name: "Fast Track", description: "A focused route forward.", detail: "One-year A Level programme · [TODO: entry requirements and next intake]", href: "#enquire"},
    ],
    note: "Talk to admissions about availability, entry requirements and the right pathway.",
  },
  day: {
    eyebrow: "A day at Jade",
    title: "Life happens\nbetween the lessons.",
    description: "A glimpse of the experiences that make a school day more than a timetable.",
    previous: "Previous school-day chapter", next: "Next school-day chapter",
    note: "Illustrative sequence · [TODO: confirm the school timetable]",
    chapters: [
      {number: "01", moment: "Explore", title: "A question worth asking.", description: "In the science lab, an idea becomes something you can test, see and understand.", image: {src: "/media/science-placeholder.webp", alt: "Jade students wearing safety goggles during a practical chemistry lesson", label: archiveLabel, position: "65% center"}},
      {number: "02", moment: "Connect", title: "A team to belong to.", description: "Futsal, basketball and shared challenges make space for teamwork beyond the classroom.", image: {src: "/media/sport-placeholder.webp", alt: "Placeholder school sports photograph from Jade's public archive", label: archiveLabel}},
      {number: "03", moment: "Express", title: "A voice that is your own.", description: "Workshops, cultural activities and student leadership invite different talents into the school day.", image: {src: "/media/community-placeholder.webp", alt: "Placeholder student life photograph from Jade's public archive", label: archiveLabel}},
    ],
  },
  stats: {
    eyebrow: "The bigger picture",
    title: "Potential,\nmade visible.",
    note: "[TODO: school-approved figures and reporting period]",
    items: [
      {value: null, suffix: "%", label: "Academic achievement", placeholder: "[TODO: verified results]"},
      {value: null, suffix: "+", label: "Graduate destinations", placeholder: "[TODO: verified destinations]"},
      {value: null, suffix: "", label: "Student opportunities", placeholder: "[TODO: verified activities]"},
    ],
  },
  outcomes: {
    eyebrow: "Beyond Jade",
    title: "What stays\nwith you.",
    description: "A qualification opens a door. The way you think, the people you meet and the confidence you build go with you.",
    link: {label: "Talk about your next step", href: "#enquire"},
    image: {src: "/media/community-placeholder.webp", alt: "Jade community archive photograph, pending replacement with an approved graduate portrait", label: archiveLabel},
    placeholder: "[TODO: approved graduate destinations and recent outcomes]",
    previous: "Previous student story", next: "Next student story", sourceLabel: "Read the original story", slideLabel: "Student story",
    testimonials: [
      {quote: "I could have a conversation about the real world, and usually on topics beyond economics.", name: "Praveen", role: "Former student · published Jade testimonial", source: "https://www.jadeeducation.org/testimonialspast-students"},
      {quote: "They proved learning was fun", name: "Abdul Rahman", role: "Former student · published Jade testimonial", source: "https://www.jadeeducation.org/testimonialspast-students"},
    ],
  },
  news: {
    eyebrow: "The Jade journal",
    title: "A school.\nSo many stories.",
    link: {label: "Visit the school’s current news", href: "https://www.jadeeducation.org/home"},
    externalLabel: "Opens the original published story",
    items: [
      {category: "School community", date: "04 October 2026", title: "Celebrating the next chapter: Graduation & Prize Giving 2026", href: "https://www.sundaytimes.lk/261004/education/jade-international-school-recognises-top-achievers-during-annual-graduation-prize-giving-2026-658826.html", image: {src: "/media/community-placeholder.webp", alt: "Jade archive placeholder awaiting an approved graduation event photograph", label: archiveLabel}},
      {category: "Learning beyond lessons", date: "20 June 2026 · Archive", title: "A day for discovery, creativity and new possibilities", href: "https://www.jadeeducation.org/open-day-2026", image: {src: "/media/science-placeholder.webp", alt: "Practical science at Jade, used as an illustrative archive placeholder for the Open Day story", label: archiveLabel}},
    ],
  },
  enquiry: {
    eyebrow: "Your next chapter",
    title: "Let’s start\nwith hello.",
    description: "Tell us a little about your family. Ask a question, explore a pathway or arrange a time to see Jade for yourself.",
    notice: "Prototype form — enquiries are not sent. Please call or WhatsApp the school to make a real enquiry.",
    feeNote: "[TODO: fees and approved fee enquiry information]",
    admissionsNote: "[TODO: admissions steps, key dates and tour availability]",
    contactLabel: "Prefer a conversation?",
    contactLinks: [
      {label: "+94 77 395 4321", href: "tel:+94773954321"},
      {label: "WhatsApp admissions", href: "https://wa.me/94773954321"},
      {label: "info@jadeeducation.org", href: "mailto:info@jadeeducation.org"},
    ],
  },
};
