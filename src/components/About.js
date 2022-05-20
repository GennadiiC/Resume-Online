import { useContext } from 'react';
import { ResumeContext } from '../context/context';

export default function About () {

  const { experience, courses } = useContext(ResumeContext);

  return (
    <main>
      <section className='about'>

        <div className='about_bio-image'>
          <div className='about_bio'>
            <h2 className='text-secondary'>BIO</h2>
            <p>
              I've started my Front-End journey in 2018.
              Stack: HTML, CSS, JavaScript, React JS, React Router, React Hooks, Git, NPM, Bootstrap, 
              AJAX, Fetch, Context API. 
              My personal advantages are: love for learning new things- especially related to technology and computers, 
              love for new technologies, creative mindset, fluent English (at least B2 spoken), long-term experience 
              of working inside international teams (7 years of living and working abroad).            
            </p>
          </div>
        </div>

        <div className='jobs'>
          <h2 className='text-secondary'>Job Experience:</h2>
          {experience.map((exp, i) => 
            <div key={i} className='jobs_job'>
              <h2 className='text-secondary'>{exp.time}</h2>
              <h3>{exp.company}</h3>
              <h6>{exp.position}</h6>
              <p>{exp.desc}</p>
            </div> 
          )}
        </div>

        <div className='jobs'>
          <h2 className='text-secondary'>Courses:</h2>
          {courses.map((course, i) => 
            <div key={i} className='jobs_job'>
              <h2 className='text-secondary'>{course.name}</h2>
              <a href={course.link} target='_blank'>
                <h6>{course.link}</h6>
              </a>
              <p>{course.desc}</p>
            </div>
          )}
        </div>

        <div className='social-icons'>
          <a href='https://www.instagram.com/genaivanov/' target='_blank'>
            <i className='fab fa-instagram fa-2x'></i>
          </a>
          <a href='https://www.facebook.com/brothergdeep/' target='_blank'>
            <i className='fab fa-facebook fa-2x'></i>
          </a>
          <a href='https://github.com/GennadiiC' target='_blank'>
            <i className='fab fa-github fa-2x'></i>
          </a>
          <a href='https://www.linkedin.com/in/gennadii-chamorsov-36238a69/' target='_blank'>
            <i className='fab fa-linkedin fa-2x'></i>
          </a>
        </div>

        <footer>&copy; Copyright 2022</footer>
      </section>
    </main>
  );
}
