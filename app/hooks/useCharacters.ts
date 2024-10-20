import { useEffect, useState } from "react";
import { ApiResponse, CharacterFilter } from "../types/Character";

const useCharacters = (page: number, filters: CharacterFilter) => {
  const [characters, setCharacters] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const query = new URLSearchParams();
        query.append("page", String(page));

        if (filters.name) query.append("name", filters.name);
        if (filters.status) query.append("status", filters.status);
        if (filters.species) query.append("species", filters.species);
        if (filters.gender) query.append("gender", filters.gender);

        const response = await fetch(
          `https://rickandmortyapi.com/api/character?${query.toString()}`,
        );
        if (!response.ok) throw new Error("Error fetching data");
        const data: ApiResponse = await response.json();
        setCharacters(data);
      } catch (err) {
        setCharacters(null);
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [page, filters]);

  return { characters, loading, error };
};

export default useCharacters;
