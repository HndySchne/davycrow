"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Cards from "@/components/cards";

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

  console.log("item :", item);

  // supression de l'item avec la clé ID
  const supressItem = async (id: string) => {
    console.log(id);
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "DELETE",
    });
    console.log("réponse supression : ", res);

    // appel de la lecture
    console.log("appel lecture: ", res);
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
    console.log("données de lecture :", data);
    setItem(data);
  };

  return (
    <main>
      <div className="message">
        <Link href={"/davcoged/email"}>
          <button>messagerie</button>
        </Link>
      </div>
      <div className="Create-item">
        <Link href={"/davcoged/createItem"}>
          <button>Creer item</button>
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
          ))
        ) : (
          <div>Rien dans la BDD</div>
        )}
      </div>
    </main>
  );
}
