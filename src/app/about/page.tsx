import './about.scss';

export default function about() {
  return (
    <main>
      <h2>A propos de moi</h2>
      <div className='about-container'>
        <div className='about-container__description--1'>
          <p>
            Artiste Autodidacte depuis 2012, je me suis formé via de nombreuses
            commandes pour de nombreux clients !{" "}
          </p>
        </div>
        <div className='about-container__img'>
          <img src="/pictures/Logo.webp" alt="desc" />
        </div>
      </div>
      <div className='about-container__description--2'>
        <p>
          Passionné de culture populaire, de peinture, de sérigraphie vous allez
          trouver votre bonheur sur ce site !!
        </p>
      </div>
    </main>
  );
}
