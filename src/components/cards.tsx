import { useState } from "react";
import "./styles/cards.scss";
import Link from "next/link";

type Card = {
  id: string;
  title: string;
  price: number;
  currency: string;
  description: string;
  pictures: string;
};

export default function card({id, title, price, currency, pictures}: Card) {
  console.log("pictures crazy :", { pictures });
  console.log("id crazy :", id );

  return (
    <div key={id}>
      <Link href={"/detail/" + id}>
        <div className="card-product">
          <div className="card-product__img">
            <img src={pictures} alt="desc" />
          </div>
          <div className="card-product__description">
            <div className="product-description__text">
              <p>{title} - {price} {currency}</p>
            </div>
            <div className="product-description__logo"></div>
          </div>
        </div>
      </Link>
    </div>
  );
}
