import React from "react";

interface CharacterFiltersProps {
  filters: {
    name: string;
    status: string;
    species: string;
    gender: string;
  };
  onFilterChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  onResetFilters: () => void;
}

const CharacterFilters: React.FC<CharacterFiltersProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
}) => {
  return (
    <div className="my-4 grid w-full grid-cols-2 justify-start gap-3 md:grid-cols-3 lg:grid-cols-5">
      <input
        type="text"
        name="name"
        placeholder="Filtrar por nombre"
        value={filters.name}
        onChange={onFilterChange}
        className="rounded-xl border border-gray-300 p-2"
      />
      <select
        name="status"
        value={filters.status}
        onChange={onFilterChange}
        className="rounded-xl border border-gray-300 p-2"
      >
        <option value="">Estado</option>
        <option value="Alive">Vivo</option>
        <option value="Dead">Muerto</option>
        <option value="unknown">Desconocido</option>
      </select>
      <select
        name="species"
        value={filters.species}
        onChange={onFilterChange}
        className="rounded-xl border border-gray-300 p-2"
      >
        <option value="">Especie</option>
        <option value="Human">Humano</option>
        <option value="Alien">Alienígena</option>
      </select>
      <select
        name="gender"
        value={filters.gender}
        onChange={onFilterChange}
        className="rounded-xl border border-gray-300 p-2"
      >
        <option value="">Género</option>
        <option value="Male">Masculino</option>
        <option value="Female">Femenino</option>
        <option value="Genderless">Sin género</option>
        <option value="unknown">Desconocido</option>
      </select>
      <button
        onClick={onResetFilters}
        className="rounded-xl bg-red-500 px-4 py-2.5 text-center text-white transition ease-in-out hover:bg-red-600"
      >
        X
      </button>
    </div>
  );
};

export default CharacterFilters;
