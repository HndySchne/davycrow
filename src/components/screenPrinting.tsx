import Link from "next/link";
import "./styles/screenprinting.scss";

export default function screenPrinting() {

  // typage de l'objet tableau qui va s'afficher pour les différents types de sérigraphies 
  type typeScreenPrinting = {
    label: string;
    code: string;
  }[];

  // Contenu du tableau avec les différents codes pour les différentes sérigraphies 
  // Sert à la fois au libellé et à la navigation grace au code (SE + code) 
  const typeScreenPrinting: typeScreenPrinting = [
    { label: "Numérotées noir et blanc", code: "BW" },
    { label: "Numérotées couleur", code: "NC" },
    { label: "Retravaillées", code: "RC" },
  ];

  return (
    <main>
      <h2>Sérigraphies</h2>
      <div className="screen-printing">
        {typeScreenPrinting.map((index) => (
          <Link
            href={"/product/SE" + index.code}
            key={index.code}
            className="screen-printing__choice">
            <p>{index.label}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
