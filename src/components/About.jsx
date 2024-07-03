import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
  <section className='bg-white py-20' id='about'>
    <div className='align-element grid md:grid-cols-2 item-center gap-16'>
        <img src= {aboutSvg} className='w-full h-64' />
        <article>
        <SectionTitle text='About Guilherme' />
        <p className='text-slate-600 mt-8 leading-loose'>
        As a dedicated full-stack developer specializing in React, I bring my best to every project I undertake. My passion for technology drives me to continuously learn and improve, ensuring that I deliver high-quality solutions that meet and exceed client expectations. Whether working on front-end interfaces or back-end systems, my commitment to excellence and growth is evident in my work.
        </p>
        </article>
    </div>
  </section>
  )
}

export default About
