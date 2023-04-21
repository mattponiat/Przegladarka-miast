import * as React from "react";
import { Link } from "react-router-dom";
import { Cities } from "../types/types";

type SideBarProps = {
  cities: Cities[];
};

const SideBar = ({ cities }: SideBarProps) => {
  const [search, setSearch] = React.useState("");

  //Function to filter cities based on search input
  const filterCities = React.useMemo(() => {
    let result = cities;

    if (search) {
      result = cities.filter((city) =>
        city.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    return result;
  }, [cities, search]);

  return (
    <div className="full-height text-slate-90 w-full max-w-sm border-r border-gray-200 px-2 pl-14 text-base">
      <div className="full-height flex flex-col px-4 pb-6">
        <div className="flex flex-col border-b border-gray-200 pb-6 pt-8">
          <label htmlFor="search" className="mb-1 font-medium">
            Wyszukaj
          </label>
          <input
            id="search"
            name="search"
            type="search"
            className="mb-4 w-full rounded-md border border-gray-200 py-2 pl-3"
            placeholder="Wpisz nazwę miasta"
            value={search}
            onChange={(e) => {
              setSearch(e.currentTarget.value);
            }}
          />
          <label htmlFor="voivodeship" className="mb-1 font-medium">
            Województwo
          </label>
          <select
            id="voivodeship"
            name="voivodeship"
            className="w-full rounded-md border border-gray-200 py-2 pl-3"
            defaultValue=""
          >
            <option value="">Wybierz województwo</option>
            {cities.map((city, i) => (
              <option
                key={`${city.voivodeship}, ${i}`}
                value={city.voivodeship}
              >
                {city.voivodeship}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2 pt-8 text-slate-900">
          {filterCities.map((city, i) => (
            <Link
              to={`miasto/${city.name.toLowerCase()}`}
              className="flex w-full items-start rounded-md border border-gray-200 py-2 pl-3"
              key={`${city}, ${i}`}
            >
              {city.name}
            </Link>
          ))}
        </div>
        <button className="mt-auto w-full rounded-md bg-slate-900 p-2 text-white hover:bg-slate-800">
          Dodaj nowe miasto
        </button>
      </div>
    </div>
  );
};

export default SideBar;
