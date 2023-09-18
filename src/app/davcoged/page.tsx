"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Cards from "@/components/cards";
import './davcoged.scss'; 

export default function Home() {
  const [item, setItem] = useState([]);

  interface Card {
    _id: string;
    title: string;
    price: number;
    currency: string;
    description: string;
    category: string;
    subcategory: string;
    url: string;
  }
  
  // premier appel sur la page 
  useEffect(() => {
    fetch("http://localhost:3000/api/products", { method: "GET",
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

  // supression de l'item avec la clé ID
  const supressItem = async (id: string) => {
    console.log(id);
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "DELETE",
    });

    // appel de la lecture pour mise à jour de la page 
    fetchData();
  };

  // mise à jours des données
  const fetchData = async () => {
    console.log("fetch data !!!!");
    const response = await fetch("http://localhost:3000/api/products", {
      method: "GET",
      headers: {
        "Accept-Version": "v5.0",
      },
      cache: "no-cache",
      redirect: "manual",
    });
    const data = await response.json();
    setItem(data);
  };

  return (
    <main>
      <div className="buttons-container">
        <Link href={"/davcoged/email"}>
          <button className="buttons-container__detail">messagerie</button>
        </Link>
      </div>
      <div className="buttons-container">
        <Link href={"/davcoged/createItem"}>
          <button className="buttons-container__detail">Creer item</button>
        </Link>
      </div>
      <div className="items">
        {item.length > 0 ? (
          item.map((index: Card) => (
            <div key={index._id} className="card-container">
              <Cards
                id={index._id}
                title={index.title}
                price={index.price}
                currency={index.currency}
                description={index.description}
                pictures={index.url}
              />
              <div className="buttons-container">
              <Link href={"/davcoged/modifyItem/" + index._id}>
              <button>Modifier</button>
              </Link>
              <button
                onClick={() => {
                  supressItem(index._id);
                }}
              >
                supprimer
              </button>

              </div>
            </div>
          ))
        ) : (
          <div>Rien dans la BDD</div>
        )}
      </div>
    </main>
  );
}
