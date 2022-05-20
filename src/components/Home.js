
export default function Home () {

  return (
    <main className='main'>
      <section className='home'>
        <h2>Hi! My name is</h2>
        <h1 className='home_name'>
          Gennadii <span className='home_name--last'>Chamorsov</span>
        </h1>
        <h2 className='home_h2'>Front-End Web Developer</h2>
        
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
