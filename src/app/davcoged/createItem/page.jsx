"use client";

import { useState } from "react";
import "./createItem.scss";

export default function createItem() {
  const [file, setFile] = useState();
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [subcategory, setSubcategory] = useState();
  const [error, setError] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("e:", title);
    console.log(
      " ============================================================================================== "
    );
    console.log("file :", file);
    if (!file) return;

    try {
      const data = new FormData();
      data.append("file", file);
      data.append("title", title);
      data.append("price", price);
      data.append("description", description);

      // code catégorie à transformer
      let categoryCode = "";
      switch (category) {
        case "Oeuvres originales":
          categoryCode = "OO";
          break;
        case "Sérigraphies":
          categoryCode = "SE";
          break;
      }
      data.append("category", categoryCode);

      // subcatégorie à transformer en code
      let subCategoryCode = "";
      switch (subcategory) {
        case "Numérotées noir et blanc":
          subCategoryCode = "BW";
          break;
        case "Numérotées couleur":
          subCategoryCode = "NC";
          break;
        case "retravaillées":
          subCategoryCode = "RC";
          break;
        case "aucune":
          subCategoryCode = "";
          break;
      }
      data.append("subcategory", subCategoryCode);
      data.append("currency", "euros");
      console.log(data);

      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        body: data,
      });

      // handle the error
      if (!res.ok) throw new Error(await res.text());
    } catch (e) {
      // Handle errors here
      throw new Error('test erreure')
    }
    document.getElementById("SubmitForm").reset();
  };

  return (
    <div>
      {error === undefined ? (
        <main>
          <h3>Création item</h3>
          <form id="SubmitForm" onSubmit={onSubmit}>
            <div className="contact-container__input">
              <label htmlFor="title">titre de la photo</label>
              <input
                type="text"
                id="title"
                name="title"
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
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div className="contact-container__input">
              <label htmlFor="description">description de l'article</label>
              <textarea
                id="description"
                name="description"
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
                onChange={(e) => setSubcategory(e.target.value)}
                required
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
                multiple
                onChange={(e) => setFile(e.target.files?.[0])}
              />
            </div>
            <div className="submit-container">
              <button type="submit" className="submit-container__button">
                <p>Submit</p>
              </button>
            </div>
          </form>
        </main>
      ) : (
        <div>error</div>
      )}
    </div>
  );
}
