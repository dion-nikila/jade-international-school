import {assetPath} from '@/lib/assets';
import type {Metadata} from 'next';
import Link from 'next/link';
import {home} from '@/content/home';
import {site} from '@/content/site';
import {photos} from '@/content/school';
import {Hero,ProgrammeExplorer,PhotoGallery,CampusExplorer} from '@/components/Explore';
import {TeachingSection,TourBanner,Stories,Picture,FAQ} from '@/components/Sections';
import {VerifiedFacts} from '@/components/SchoolContent';
export const metadata:Metadata={title:{absolute:home.meta.title},description:home.meta.description,openGraph:{title:home.meta.title,description:home.meta.description,images:[new URL(assetPath(home.hero.image.src),site.url).href]}};
export default function Home(){return <main id="main">
 <Hero/>
 <section className="school-information purple" aria-label="School information"><div className="page-width"><VerifiedFacts facts={home.information.facts} className="information-facts"/></div></section>
 <section className="section purple programme-section" id="start-here"><div className="page-width"><div className="section-heading"><h2>Start here</h2><p>Find the programme for the stage you are considering.</p></div><ProgrammeExplorer/><Link className="plain-link light-link foundation-extra" href="/foundation">Also explore the NCC Foundation Diploma</Link></div></section>
 <TeachingSection/>
 <section className="section page-width school-life-feature"><div className="life-feature-copy"><h2>There’s a lot happening here.</h2><p>Futsal on the school court. Drama in the classroom. A night on stage. These are some of the activities that bring Jade students together.</p><Link className="plain-link" href="/school-life">Explore school life</Link></div><div className="life-feature-photos"><Picture photo={photos.sport} className="life-sport"/><Picture photo={photos.music} className="life-music"/><p className="image-note">On the court at Jade, and on stage at Jade Night 2025.</p></div></section>
 <section className="section page-width"><div className="section-heading"><h2>Step inside the school.</h2><p>Explore the classrooms, science lab, computer room and in-house court.</p></div><CampusExplorer/></section>
 <section className="gallery-section section"><div className="page-width"><div className="section-heading"><h2>A closer look.</h2><p>Classroom work, sport and school celebrations, photographed at Jade.</p></div><PhotoGallery compact/><div className="section-end"><Link className="plain-link" href="/school-life#gallery">See the full gallery</Link></div></div></section>
 <section className="student-voice page-width"><div className="voice-label"><h2>From a past student</h2><p>Praveen, past student.</p></div><div><blockquote>“I could have a conversation about the real world, and usually on topics beyond economics.”</blockquote><a className="plain-link" href="https://www.jadeeducation.org/testimonialspast-students">More student experiences</a></div></section>
 <section className="section page-width"><div className="section-heading"><h2>Notes from Jade.</h2><Link className="plain-link" href="/news">All school stories</Link></div><Stories/></section>
 <section className="admissions-home section"><div className="page-width admissions-layout"><div><h2>Let’s talk about your next school.</h2><p>Start with a conversation, then see the school for yourself. Admissions can confirm entry requirements, subjects and the current fee schedule.</p><Link className="primary-button" href="/admissions">Admissions at Jade</Link></div><div><ol className="admissions-steps"><li><h3>Choose your stage</h3><p>Preschool, primary, examination years or university preparation.</p></li><li><h3>Visit the school</h3><p>See the classrooms and ask the questions that matter to your family.</p></li><li><h3>Confirm the details</h3><p>Discuss the intake, required documents and application process with Jade.</p></li></ol></div></div></section>
 <section className="section page-width faq-section"><div><h2>Before you visit.</h2><Link className="plain-link" href="/admissions#questions">More admissions questions</Link></div><FAQ short/></section>
 <TourBanner/>
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'School',name:site.name,telephone:site.telephone,email:site.email,address:{'@type':'PostalAddress',...site.postalAddress},sameAs:[site.source]}).replace(/</g,'\\u003c')}}/>
 </main>;}
