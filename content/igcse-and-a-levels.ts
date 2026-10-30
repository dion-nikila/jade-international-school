import type {PathwayContent} from "./types";
export const examinationPathway: PathwayContent = {
  slug:"igcse-and-a-levels",title:"IGCSE and A Levels",
  description:"Explore Cambridge and Edexcel pathways at Jade International School. Discuss your current stage and the subjects you want to study with admissions.",
  image:{src:"/media/jade-round-table.jpg",alt:"Students and a teacher discussing notes spread across a circular classroom table at Jade",label:"Students discussing their work around a circular table at Jade."},
  facts:[
    {label:"Qualifications",value:"IGCSE and A Levels",verify:false,source:["https://www.jadeeducation.org/careers"]},
    {label:"Pathways",value:"Cambridge and Edexcel",verify:false,source:["https://www.jadeeducation.org/careers"]},
    {label:"Entry requirements",value:null,verify:true,source:[]},
    {label:"Current subject list",value:null,verify:true,source:[]},
  ],
  sections:[
    {title:"Discuss your subject choices",body:"Contact Jade with your current subjects and examination stage. Ask which subjects and examination boards are available for the intake you are considering."},
    {title:"See how lessons work",body:"Lessons use a workshop approach in glass-walled classrooms with circular tables. A visit lets you see the classrooms and ask how lessons are organised."},
  ],
  next:{title:"Talk to admissions",body:"Ask about entry requirements, the timetable and the subjects you want to take. Bring your questions to a school visit.",link:{label:"Book a tour",href:"/visit"}},
  sources:[{label:"Jade’s published teaching approach",href:"https://www.jadeeducation.org/home"},{label:"Jade’s published programme information",href:"https://www.jadeeducation.org/1-year-a-level-programme"}],sourceLabel:"Information from Jade",
};
