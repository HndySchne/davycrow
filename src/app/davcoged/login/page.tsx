"use client";
import { setCookie } from "cookies-next";
import "./login.scss"

type Response = {
  id: string;
  token: string;
};

export default function contact() {
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log(formData);
    const response = fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        return res as Response;
      });

    setCookie("jwt", (await response).token);
    // retour à la page principale
    window.location.href = "/davcoged";
  }

  return (
    <main>
      <div className="contact-container">
        <h2>LOGIN</h2>
        <form onSubmit={onSubmit}>
          <div className="contact-container__input">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="contact-container__input">
            <label htmlFor="password">Mot de passe</label>
            <input type="text" id="password" name="password" required />
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
