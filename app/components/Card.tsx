import React from "react";
import Image from "next/image";
import { Character } from "../types/Character";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="relative flex transform flex-col justify-between overflow-hidden rounded-lg border border-[#72C82B] bg-[#0e0e0e] text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
      <Image
        className="h-64 w-full transform object-cover transition-transform duration-500 hover:scale-110"
        src={character.image}
        alt={character.name}
        width={200}
        height={200}
      />
      <div className="flex h-full flex-col justify-between space-y-2 px-4 py-3">
        <h2 className="text-2xl font-bold">{character.name} </h2>
        <div>
          <p className="text-lg">
            <span className="ml-1" role="img" aria-label="Status">
              {character.status === "Alive"
                ? "🟢 Vivo"
                : character.status === "Dead"
                  ? "🔴 Muerto"
                  : "🔴 Desconocido"}
            </span>
          </p>
          <p className="text-lg">
            Especie:
            <span className="ml-1" role="img" aria-label="Species">
              {character.species === "Humano" ? "Humano 👤" : "Alien 👽"}
            </span>
          </p>
          <p className="text-lg">
            Género:
            <span className="ml-1" role="img" aria-label="Gender">
              {character.gender === "Male"
                ? "Hombre 👨"
                : character.gender === "Female"
                  ? "Mujer 👩"
                  : "Desconocido 🚫"}
            </span>
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-1/2 w-full"></div>
    </div>
  );
};

export default CharacterCard;
