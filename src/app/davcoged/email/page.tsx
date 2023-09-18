"use client";
import { useEffect, useState } from "react";
import "./email.scss";

export default function email() {
  const [item, setItem] = useState([]);
  interface Messages {
    _id: string;
    title: string; 
    firstName: string;
    lastName: string;
    email: string;
    text: string;
  }
  //// USEFFECT => FRONT ALIMENTATION MESSAGERIE
  useEffect(() => {
    fetch(`http://localhost:3000/api/messages`, {
      method: "GET",
      headers: {
        "Accept-Version": "v5.0",
      },
      cache: "no-cache",
      redirect: "manual",
    })
      .then((response) => response.json())
      .then((res) => {
        setItem(res);
      });
  }, []);

  console.log("items :", item);

  return (
    <main>
      <h3>EMAILS</h3>
      <div className="messages-containers">
        {item.length > 0 ? (
          item.map((index: Messages) => (
            <div key={index._id}>
              <div className="message-container">
                <div>
                  <h4>
                  {index.firstName} {index.lastName}
                  </h4>
                  {index.title !== undefined ? 
                    <p>Oeuvre : {index.title}</p> : null
                  }
                </div>
                <div><p>{index.text}</p></div>
                <p>Répondre à l'email : <a href={"mailto:" + index.email}>{index.email}</a></p>
              </div>
            </div>
          ))
        ) : (
          <div>Pas de messages pour le moment</div>
        )}
      </div>
    </main>
  );
}
