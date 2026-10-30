import type {PathwayContent} from "./types";
export const fastTrack: PathwayContent = {
  slug:"fast-track-a-levels",title:"Fast Track A Levels",
  description:"Fast Track is Jade’s one-year A Level programme. Contact the school to discuss whether its pace and current subject options fit your plans.",
  image:{src:"/media/jade-glass-classroom.jpg",alt:"A teacher and students discussing work at a glass classroom board in Jade",label:"A workshop-style lesson beside Jade’s glass classroom board."},
  facts:[
    {label:"Qualification",value:"A Levels",verify:false,source:["https://www.jadeeducation.org/fast-track-a-levels"]},
    {label:"Duration",value:"One year",verify:false,source:["https://www.jadeeducation.org/fast-track-a-levels"]},
    {label:"Entry requirements",value:null,verify:true,source:[]},
    {label:"Next intake",value:null,verify:true,source:[]},
  ],
  sections:[
    {title:"Understand the one-year programme",body:"Talk to Jade about the teaching schedule, examination sittings and time you would need for independent study. Confirm the available subjects and examination board directly with the school."},
    {title:"Check entry requirements",body:"Share your current qualifications with admissions and ask what is required for entry. Confirm fees and intake dates before making an application."},
  ],
  next:{title:"Discuss Fast Track with Jade",body:"Ask the admissions team about your subject choices and arrange a visit to the school.",link:{label:"Book a tour",href:"/visit"}},
  sources:[{label:"Jade’s Fast Track programme",href:"https://www.jadeeducation.org/fast-track-a-levels"}],sourceLabel:"Information from Jade",
};
