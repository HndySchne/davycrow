"use client";
import { useEffect, useState } from "react";

export default function email() {
  const [item, setItem] = useState([]);
      interface Messages {
        _id: string,  
        firstName: string,
        lastName: string, 
        email: string, 
        text: string
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

      console.log('items :', item);
      
    return (
      <main>
        <h3>EMAILS</h3>
        <div>
        {item.length > 0 ? (
          item.map((index: Messages) => (
            <div key={index._id}>
              <div>{index.firstName}, {index.lastName} </div>
              <div>{index.text}</div>
            </div>
          ))
        ) : (
          <div>Pas de messages pour le moment</div>
        )}
        </div>

      </main>
    );
  }
  