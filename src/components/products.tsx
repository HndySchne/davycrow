"use client";
import Cards from "../components/cards";
import React, { useEffect, useState } from "react";
import "./styles/products.scss";
import "./styles/cards.scss";

type navigation = {
  nav: string;
};

export default function card({ nav }: navigation) {
  const [item, setItem] = useState([]);

  // création du titre de la page en fonction de la navigation (code produit + sous code produit)
  let titleNav: string = "Nouveautés";
  switch (nav) {
    case "":
      titleNav = "Nouveautés";
      break;
    case "OO":
      titleNav = "Oeuvres originales";
      break;
    case "SEBW":
      titleNav = "Noir et blanc";
      break;
    case "SENC":
      titleNav = "Numérotées couleur";
      break;
    case "SERC":
      titleNav = "Retravaillées";
      break;
  }

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
    fetch("http://localhost:3000/api/products", {
      method: "GET",
      headers: {
        "Accept-Version": "v5.0",
      },
      cache: "no-cache",
      redirect: "manual",
    })
      .then((response) => response.json())
      .then((res) => {
        console.log('res sans filtre :', res);
        const selectNav =
          nav != "" ? res.filter((Index: Card) => Index.category + Index.subcategory === nav) : res;
        console.log("select nav:", selectNav);
        console.log("nav :", nav);
        setItem(selectNav);
      });
  }, []);

  console.log("item :", item);

  return (
    <div className="Cards-container">
      <h2>{titleNav}</h2>
      {item.length > 0 ? (
        item.map((productItem: Card) => (
          <div key={productItem._id} className="card-container">
            <Cards
              id={productItem._id}
              title={productItem.title}
              price={productItem.price}
              currency={productItem.currency}
              description={productItem.description}
              pictures={productItem.url}
            />
          </div>
        ))
      ) : (
        <div> Pas encore d'Item pour le moment </div>
      )}
    </div>
  );
}
