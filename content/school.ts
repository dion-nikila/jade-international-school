import type {Media} from './types';
export const photos: Record<string,Media> = {
 classroom:{src:'/media/jade-glass-classroom.jpg',alt:'Students discussing their work beside a glass classroom board at Jade',label:'A classroom discussion at Jade.',position:'50% 60%'},
 tables:{src:'/media/jade-classroom-tables.jpg',alt:'Circular tables inside a glass-walled Jade classroom',label:'Circular tables and glass walls at the Colombo school.'},
 discussion:{src:'/media/jade-round-table.jpg',alt:'Students and a teacher discussing notes across a circular table',label:'Working through ideas around a shared table.'},
 group:{src:'/media/jade-group-work.jpg',alt:'Jade students planning together on a large sheet of paper',label:'Group work at Jade.'},
 board:{src:'/media/jade-glass-board.jpg',alt:'A student writing calculations on a glass classroom board',label:'Working at the glass board.'},
 science:{src:'/media/jade-science-lab.jpg',alt:'Jade students wearing safety goggles for a chemistry practical',label:'A chemistry practical at Jade.'},
 computers:{src:'/media/jade-computer-lab.jpg',alt:'Desktop computers set up in the Jade computer room',label:'The computer room at Jade.'},
 sport:{src:'/media/jade-futsal.jpg',alt:'Jade students playing on the indoor futsal court',label:'Futsal on the school’s in-house court.'},
 basketball:{src:'/media/jade-basketball.jpg',alt:'Students taking part in basketball practice at Jade',label:'Basketball practice.'},
 preschool:{src:'/media/jade-preschool-painting.jpg',alt:'A child painting at Jade Preschool',label:'Painting at Jade Preschool.',position:'50% 40%'},
 graduation:{src:'/media/jade-graduation-2025.jpg',alt:'Students and teachers on stage at Jade’s 2025 graduation ceremony',label:'Graduation 2025. Photograph from Jade’s event archive.'},
 careers:{src:'/media/jade-career-fair.jpg',alt:'Jade students in conversation with university representatives at a career fair',label:'University Career Fair. Photograph from Jade’s event archive.'},
 drama:{src:'/media/jade-drama.jpg',alt:'Students watching a drama workshop in a Jade classroom',label:'A drama workshop from the school’s published gallery.'},
 music:{src:'/media/jade-night-2025.jpg',alt:'A performer on stage under purple lighting at Jade Night 2025',label:'Jade Night 2025.'},
 cooking:{src:'/media/jade-cooking.jpg',alt:'Two Jade students taking part in a cooking activity',label:'Cooking activity from Jade’s school gallery.'},
 culture:{src:'/media/jade-independence.jpg',alt:'Jade students holding a Sri Lankan flag during an Independence Day celebration',label:'Independence Day celebration from Jade’s 2024/2025 archive.'},
};
export const programmes = [
 {id:'early',tab:'Preschool & primary',title:'Starting school at Jade',body:'Painting, play and early classroom learning. Explore preschool and primary entry with the admissions team.',image:photos.preschool,href:'/starting-school',link:'Explore starting school',facts:[['Stage','Preschool and primary'],['Next step','Arrange a visit to the relevant section']]},
 {id:'exam',tab:'IGCSE & A Levels',title:'Cambridge and Edexcel pathways',body:'Explore your examination years in a school where lessons make room for discussion, problem-solving and practical work.',image:photos.science,href:'/igcse-and-a-levels',link:'Explore IGCSE and A Levels',facts:[['Qualifications','IGCSE and A Levels'],['Examination boards','Cambridge and Edexcel']]},
 {id:'fast',tab:'Fast Track',title:'A Levels in one year',body:'Jade’s Fast Track programme offers a one-year A Level route. Discuss the pace, subject combination and examination schedule with the school.',image:photos.group,href:'/fast-track-a-levels',link:'Explore Fast Track A Levels',facts:[['Qualification','A Levels'],['Duration','One year']]},
 {id:'foundation',tab:'NCC Foundation',title:'A route towards university',body:'The NCC International Foundation Diploma is a one-year pre-university programme, with progression areas including business, computing and engineering.',image:photos.careers,href:'/foundation',link:'Explore the foundation diploma',facts:[['Programme','NCC International Foundation Diploma'],['Duration','One year']]},
];
export const gallery = [
 {id:'classroom',category:'Learning',...photos.classroom}, {id:'science',category:'Learning',...photos.science},
 {id:'sport',category:'Sport',...photos.sport}, {id:'group',category:'Learning',...photos.group},
 {id:'music',category:'Arts & community',...photos.music}, {id:'graduation',category:'School events',...photos.graduation},
 {id:'basketball',category:'Sport',...photos.basketball},{id:'drama',category:'Arts & community',...photos.drama},
 {id:'careers',category:'School events',...photos.careers},{id:'cooking',category:'Arts & community',...photos.cooking},
 {id:'tables',category:'Learning',...photos.tables},{id:'culture',category:'School events',...photos.culture},
];
export const faqs = [
 {question:'Which stage can my child join?',answer:'Jade publishes preschool, primary, IGCSE, A Level and Fast Track routes, alongside the NCC International Foundation Diploma. Contact admissions with your child’s age and current stage to discuss an appropriate entry point.'},
 {question:'Can we see the school before applying?',answer:'Yes. Contact the school to arrange a tour and confirm the section you would like to visit. A requested time is confirmed directly by the school.'},
 {question:'How do we confirm subjects and fees?',answer:'Ask admissions for the current subject list, examination board, timetable and written fee schedule for your chosen programme. Availability and entry requirements should be confirmed for your intended intake.'},
 {question:'Where is the school?',answer:'Jade International School lists 321 Galle Road, Colombo 04 as its address. Families considering preschool should confirm the preschool visit location when booking.'},
 {question:'What should we prepare for an admissions conversation?',answer:'Have your child’s age, current grade or qualifications, intended programme and preferred start period ready. The school can tell you which records or documents are required.'},
];
export const stories = [
 {slug:'graduation-2025',title:'Graduation and prize giving, 2025',category:'School events',date:'2025 archive',image:photos.graduation,summary:'Students and teachers gather to celebrate the graduating class.',paragraphs:['Students, teachers and families came together for Jade’s 2025 graduation. The ceremony marked the occasion with awards and a group portrait of the graduating class.','Explore photographs from the celebration in Jade’s school gallery.'],source:'https://www.jadeeducation.org/gallery',sourceLabel:'View Jade’s original gallery'},
 {slug:'learning-around-the-table',title:'Inside Jade’s workshop classrooms',category:'Learning',date:'From the school',image:photos.discussion,summary:'Glass boards, circular tables and lessons built around participation.',paragraphs:['Workshop-style learning brings students into the discussion. At Jade, glass-walled classrooms and circular tables give them space to share work and explore the ideas in a lesson.','Students write on glass boards, plan on large sheets of paper and work around shared tables. Visit Jade to see the rooms and discuss how lessons are organised.'],source:'https://www.jadeeducation.org/home',sourceLabel:'Read Jade’s teaching approach'},
 {slug:'sport-at-jade',title:'Sport on the school timetable',category:'Sport',date:'From the school',image:photos.sport,summary:'An in-house futsal court, basketball and inter-house competition.',paragraphs:['Jade has an in-house futsal court used for practice, PE, tournaments and free play. The school also publishes information about karate, netball, football and basketball.','The annual inter-house futsal tournament is part of the school’s sports calendar. Families can ask about the current activity timetable when visiting Jade.'],source:'https://www.jadeeducation.org/sports',sourceLabel:'Read Jade’s sports information'},
 {slug:'university-career-fair',title:'Conversations about university',category:'School events',date:'2024/2025 archive',image:photos.careers,summary:'University representatives and students meet at Jade’s career fair.',paragraphs:['At Jade’s University Career Fair, students met university representatives and discussed their options for further study.','The school’s 2024/2025 archive also includes an RMIT Accelerator Program and a Festival of Australia visit. Contact Jade about forthcoming opportunities.'],source:'https://www.jadeeducation.org/gallery',sourceLabel:'View the original event archive'},
];
