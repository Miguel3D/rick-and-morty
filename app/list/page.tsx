"use client";

import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import useCharacters from "../hooks/useCharacters";
import Loader from "../components/Loader";
import ErrorModal from "../components/Error";
import Image from "next/image";
import ImagenTitle from "../../public/imgBanner.webp";
import { Character, CharacterFilter } from "../types/Character";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import CharacterFilters from "../components/CharacterFilters";
import Footer from "../components/footer";
import StarsBackground from "../components/StarsBackground";

const Characters: NextPage = () => {
  const [filters, setFilters] = useState<CharacterFilter>({
    name: "",
    status: "",
    species: "",
    gender: "",
  });

  const [currentPage, setCurrentPage] = useState<number>(1);
  const { characters, loading, error } = useCharacters(currentPage, filters);

  const filteredCharacters = characters?.results || [];
  const totalPages = characters?.info.pages || 1;

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setFilters({
      name: "",
      status: "",
      species: "",
      gender: "",
    });
    setCurrentPage(1);
  };

  const handleErrorModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (error) {
      setIsModalOpen(true);
    }
  }, [error]);

  return (
    <>
      <div className="relative flex min-h-screen w-full items-start justify-center bg-[#0e0e0e]">
        <StarsBackground />
        <div className="z-10 mx-5 my-5 flex w-full max-w-7xl flex-col items-center justify-center space-y-7 md:mx-8 lg:mx-10">
          <Link href="/">
            <Image
              className="max-h-[300px] rounded-xl"
              src={ImagenTitle}
              alt="title"
              width={1280}
              height={300}
            />
          </Link>
          <h1 className="w-full pt-5 text-start text-3xl font-bold text-white">
            Listado de personajes
          </h1>
          <CharacterFilters
            filters={filters}
            onFilterChange={handleFilterChange}
            onResetFilters={handleResetFilters}
          />
          {loading && <Loader />}

          {isModalOpen && (
            <ErrorModal
              message={error || "Ha ocurrido un error."}
              onClose={handleErrorModalClose}
            />
          )}

          <ul className="grid w-full grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4">
            {filteredCharacters.length > 0
              ? filteredCharacters.map((character: Character) => (
                  <Card key={character.id} character={character} />
                ))
              : !loading && (
                  <div className="flex min-h-[300px] items-center justify-center">
                    <p className="text-center text-white">
                      No se encontraron personajes.
                    </p>
                  </div>
                )}
          </ul>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Characters;
