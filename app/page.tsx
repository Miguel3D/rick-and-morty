"use client";

import Link from "next/link";
import Image from "next/image";
import ImagenBg from "../public/imgBg.webp";
import ImagenTitle from "../public/imgTitle.webp";

const Home = () => {
  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${ImagenBg.src})`,
      }}
    >
      <div className="mx-10 flex w-full max-w-[900px] flex-col items-center justify-center text-center">
        {/* <h1 className="text-4xl font-bold text-white">Bienvenido</h1> */}
        <Image src={ImagenTitle} alt="title" width={500} height={300} />
        <p className="mt-4 text-lg text-white">
          Explora los personajes de Rick and Morty.
        </p>
        <Link href="/list">
          <button className="mt-6 rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-700">
            Ver Personajes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
