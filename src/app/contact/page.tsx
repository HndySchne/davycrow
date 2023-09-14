import "./contact.scss";

export default function contact() {
  return (
    <main>
      <div className="contact-container">
        <h2>Contact</h2>
        <form action="http://localhost:3000/api/messages" method="post">
          <div className="contact-container__input">
            <label htmlFor="firstName">Prénom</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="contact-container__input">
            <label htmlFor="lastName">Nom</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
          <div className="contact-container__input">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="contact-container__input">
            <label htmlFor="text">Description</label>
            <textarea id="text" name="text" required />
          </div>
          <div className="submit-container">
            <button type="submit" className="submit-container__button">
              <p>Submit</p>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
