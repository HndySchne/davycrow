"use client";
import "../contact.scss";
import { useParams } from "next/navigation";

export default function contact() {
    const params = useParams();
    const ID_URL: string = params.name.toString();

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
     
        const formData = new FormData(event.currentTarget);
        console.log(formData); 
        const response = await fetch("http://localhost:3000/api/messages", {
          method: 'POST',
          body: formData,
        })

        // retour à la page principale 
        window.location.href = "/";
      }

  return (
    <main>
      <div className="contact-container">
        <h2>Contact</h2>
        <form onSubmit={onSubmit}>
        <div className="contact-container__input">
            <label htmlFor="title">Article</label>
            <input type="text" id="title" name="title" value={ID_URL} required readOnly />
          </div>
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
