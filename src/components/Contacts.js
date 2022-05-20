
export default function About () {

  return (
    <main>
      <section className='contact'>
        <h2>Contact Me...</h2>

        <div className='contact_list'>
          <div className='contact_email'>
            <i className='fas fa-envelope'></i> Email
            <div className='text-secondary'>gchamorsov@gmail.com</div>
          </div>
          <div className='contact_phone'>
            <i className='fas fa-mobile-alt'></i> Phone
            <div className='text-secondary'>+380 (93) 421-01-88</div>
          </div>
          <div className='contact_address'>
            <i className='fas fa-marker-alt'></i> Address
            <div className='text-secondary'>Kyiv, Ukraine</div>
          </div>
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
