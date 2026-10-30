import type {Metadata} from 'next';
import {photos} from '@/content/school';
import {PageIntro,Stories,TourBanner} from '@/components/Sections';
export const metadata:Metadata={title:'News and school stories',description:'Classrooms, sport and school celebrations from Jade International School’s published archive.'};
export default function News(){return <main id="main" className="news-page"><PageIntro title="Notes from Jade." body="Classroom stories, sport and school occasions. A selection from Jade’s published school and event archive." image={photos.graduation}/><section className="section page-width"><Stories limit={4}/></section><TourBanner/></main>;}
