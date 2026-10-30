import type {PathwayContent} from "./types";
export const startingSchool: PathwayContent = {
  slug: "starting-school", title: "Starting school at Jade",
  description: "Explore preschool and primary entry with Jade. Tell admissions which stage you are considering and arrange a visit to the relevant section.",
  image: {src:"/media/jade-preschool-painting.jpg",alt:"A child painting with a brush at Jade Preschool",label:"Painting at Jade Preschool.",position:"50% 10%"},
  facts: [
    {label:"Stages",value:"Preschool and primary",verify:false,source:["https://jadepreschool.com/","https://www.jadeeducation.org/school-admission"]},
    {label:"Preschool location",value:"30 Asoka Gardens, Colombo 04",verify:true,source:["https://jadepreschool.com/","https://jadepreschool.com/admission"],note:"Homepage and admissions page show different addresses. Confirm before publishing."},
    {label:"Entry ages",value:null,verify:true,source:[]},
    {label:"Primary curriculum",value:null,verify:true,source:[]},
  ],
  sections: [
    {title:"Preschool",body:"Jade Preschool uses a play-based approach. Its admissions page has information about preschool and day care."},
    {title:"Primary",body:"For primary entry, contact Jade International School. Ask about the grade you need, the current curriculum and which documents to bring. Confirm the section and address when arranging your visit."},
  ],
  next:{title:"Ask about a place",body:"Tell Jade your child’s age and the section you are considering. Admissions can confirm current entry arrangements and a time to visit.",link:{label:"Book a tour",href:"/visit"}},
  sources:[{label:"Jade Preschool admissions",href:"https://jadepreschool.com/admission"},{label:"Jade school admissions",href:"https://www.jadeeducation.org/school-admission"}],sourceLabel:"Information from Jade",
};
