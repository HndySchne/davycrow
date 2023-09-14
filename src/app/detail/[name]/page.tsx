"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import "./detail.scss";
import Link from "next/link";

interface Card {
  _id: string,  
  title: string,
  price: number, 
  currency: string, 
  description: string,
  category: string, 
  subcategory: string,
  url: string
}

export default function detail() {
  // const [pictureActual, setModifyPicture] = useState(0);
  const params = useParams();
  const [item, setItem] = useState<Card | null>();
  const ID_URL: string = params.name;

    //// USEFFECT => FRONT ALIM 
    useEffect(() => {
      fetch(`http://localhost:3000/api/products/${ID_URL}`, {
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

    console.log(item?._id);
    

  // =============================================================  // 
  // Andy - 27/08/2023 - tableau d'images à prévoir dans une V02
  // const getClassName = (i: number) => {
  //   if (pictureActual === i) return "visible";
  //   return "notVisible";
  // };

  // // passage de +1 à l'index de la photo !
  // const next = () => {
  //   setModifyPicture((pictureActual + 1) % arrayPicturesSize);
  //   console.log("pictureActual", pictureActual);
  // };

  // // previous
  // const previous = () => {
  //   // si on est à zéro en index on prend la longueur max - 1
  //   if (pictureActual <= 0) {
  //     setModifyPicture(arrayPicturesSize - 1);
  //     return;
  //   }
  //   setModifyPicture((pictureActual - 1) % arrayPicturesSize);
  //   console.log("previous : ", arrayPicturesSize);
  // };
  // =============================================================  // 

  return (
    <main>
      <div className="detail-information">
        <h2>
          {item?.title} - {item?.price} {item?.currency}
        </h2>
        <div className="detail-images"></div>
        <div className="detail-caroussel">
          {/* {findOneArray?.pictures.map((pict, i) => ( */}
          {/* <img src={pict} alt="desc" className={getClassName(i)} /> */}
          {/* ))} */}
          <img src={item?.url} alt="description de l'oeuvre de david" />
        </div>
        <div className="detail-description"></div>
      </div>
      {/* <button className="buttons button--1" onClick={next}>
        <p>
          <FontAwesomeIcon icon={faAnglesLeft} />
        </p>
      </button>
      <button className="buttons button--2" onClick={previous}>
        <p>
          <FontAwesomeIcon icon={faAnglesRight} />
        </p>
      </button> */}
      <div className="buttons-container">
        <Link href={"/description/" + item?.description}>
          <button className="buttons-container__detail">
            <p>Description</p>
          </button>
        </Link>
        <Link href={"/contact/" + item?.title}>
          <button className="buttons-container__command">
            <p>Commander</p>
          </button>
        </Link>
      </div>
    </main>
  );
}
