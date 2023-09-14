"use client";
import { useParams } from "next/navigation";
import "./description.scss"

export default function description() {
  const params = useParams();
  const DESCRIPTION: string = params.name;

  return (
    <main>
      <h3>Description du produit</h3>
      <div className="description-container">
        <p>{DESCRIPTION}</p>
      </div>
    </main>
  );
}
