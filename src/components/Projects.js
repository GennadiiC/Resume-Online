import { useContext } from 'react';
import { ResumeContext } from '../context/context';

export default function About () {

  const { apps } = useContext(ResumeContext);

  return (
    <main>
      <section className='projects'>

        <div className='projects_bio-image'>
          <h1 className='text-secondary'>My Projects</h1>
        </div>

        <div className='projects_items'>
          {apps.map(( app, i ) => 
            <div key={i} className='projects_item'>
              <img src={app.img} alt='My Project' />
              <div className='projects_btns'>
                {/* <a href='#!' className='projects_btn'>
                  <i className='fas fa-eye'></i> Preview
                </a> */}
                <a href={app.path} target="_blank" className='projects_btn'>
                  <i className='fab fa-github'></i> {app.name}
                </a>
              </div>
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
