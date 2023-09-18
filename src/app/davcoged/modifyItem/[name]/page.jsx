"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import "./modifyitem.scss";
import { getCookie } from "cookies-next";

export default function description() {
  // LECTURE DE DESCRIPTION
  const [item, setItem] = useState();
  const params = useParams();
  const DESCRIPTION = params.name;

  //// USEFFECT => FRONT ALIM
  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${DESCRIPTION}`, {
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

  //// MODIFICATION SETEURS
  const [file, setFile] = useState();
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [subcategory, setSubcategory] = useState();

  // ========= ON Submit => modification =======================  //
  const onSubmit = async (e) => {
    getCookie("jwt");
    const cookie = getCookie("jwt");
    console.log("cookie : ", cookie);
    e.preventDefault();
    console.log("e:", title);
    console.log("file :", file);
    const data = new FormData();
    if (title != null) {
      data.append("title", title);
    } else {
      data.append("title", item?.title);
    }
    if (price != null) {
      data.append("price", price);
    } else {
      data.append("price", item?.price);
    }
    if (description != null) {
      data.append("description", description);
    } else {
      data.append("description", item?.description);
    }
    if (category != null) {
      data.append("category", category);
    } else {
      data.append("category", item?.category);
    }
    if (subcategory != null) {
      data.append("subcategory", subcategory);
    } else {
      data.append("subcategory", item?.subcategory);
    }
    data.append("currency", "euros");
    if (file != null) {
      data.append("file", file);
    }
    console.log(data);

    const res = await fetch(`http://localhost:3000/api/products/${item._id}`, {
      method: "PUT",
      body: data,
      headers: {
        authorization: "Bearer " + cookie,
      },
    });

    // Après modification on passe sur la page de gestion des intem (data) de david = davcoged
    window.location.href = "/davcoged";
  };
  // ========= ON Submit => modification => FIN =======================  //
  return (
    <main>
      <h3>Modification Item</h3>
      <div className="card-product">
        <div className="card-product__img">
          <img src={item?.url} alt="desc" />
        </div>
        <div className="card-product__description">
          <form id="SubmitForm" onSubmit={onSubmit}>
            <div className="contact-container__input">
              <label htmlFor="title">titre de la photo</label>
              <input
                type="text"
                id="title"
                name="title"
                defaultValue={item?.title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="contact-container__input">
              <label htmlFor="price">Prix</label>
              <input
                type="number"
                id="price"
                name="price"
                defaultValue={item?.price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div className="contact-container__input">
              <label htmlFor="description">description de l'article</label>
              <textarea
                type="text"
                id="description"
                name="description"
                defaultValue={item?.description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="contact-container__input">
              <label htmlFor="category">catégorie</label>
              <input
                id="category"
                name="category"
                list="category-list"
                defaultValue={item?.category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>
            <datalist id="category-list">
              <option value="Oeuvres originales"></option>
              <option value="Sérigraphies"></option>
            </datalist>
            <div className="contact-container__input">
              <label htmlFor="subcategory">sous catégorie</label>
              <input
                id="subcategory"
                name="subcategory"
                list="subcategory-list"
                defaultValue={item?.subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
              />
            </div>
            <datalist id="subcategory-list">
              <option value="Numérotées noir et blanc"></option>
              <option value="Numérotées couleur"></option>
              <option value="retravaillées"></option>
              <option value="aucune"></option>
            </datalist>
            <div>
              <label htmlFor="image">Image</label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={(e) => setFile(e.target.files?.[0])}
              />
            </div>
            <div className="submit-container">
              <button type="submit" className="submit-container__button">
                <p>MODIFIER !</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
