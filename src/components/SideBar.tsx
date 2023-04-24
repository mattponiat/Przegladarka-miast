import * as React from "react";
import { Link } from "react-router-dom";
import { Cities } from "../types/types";
import Input from "./ui/Input";
import Label from "./ui/Label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/Select";

type SideBarProps = {
  cities: Cities[];
};

const SideBar = ({ cities }: SideBarProps) => {
  const [search, setSearch] = React.useState("");
  const [voivodeship, setVoivodeship] = React.useState("");

  //Filter cities based on search input and selected voivodeship. Returns filtered data.
  const filteredCities = React.useMemo(() => {
    let result = cities;

    if (voivodeship !== "") {
      result = cities.filter(
        (city) => city.voivodeship.toLowerCase() === voivodeship.toLowerCase()
      );
    }

    if (search) {
      result = cities.filter((city) =>
        city.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    return result;
  }, [cities, search, voivodeship]);

  //Filter voivodeship to remove duplicates in select and sort them alphabetically
  const uniqueCities = cities
    .filter(
      (value, index, array) =>
        array.findIndex((t) => t.voivodeship === value.voivodeship) === index
    )
    .sort((a, b) => {
      if (a.voivodeship < b.voivodeship) {
        return -1;
      }
      if (a.voivodeship > b.voivodeship) {
        return 1;
      }
      return 0;
    });

  return (
    <div className="full-height sticky top-0 w-full max-w-sm border-r border-gray-200 px-2 pl-14 text-base text-slate-900">
      <div className="full-height flex flex-col pb-6">
        <div className="flex flex-col border-b border-gray-200 px-4 pb-6 pt-8">
          <Label htmlFor="search" className="mb-[6px] font-medium">
            Wyszukaj
          </Label>
          <Input
            type="search"
            id="search"
            className="mb-4"
            placeholder="Wpisz nazwę miasta"
            value={search}
            onChange={(e) => {
              setSearch(e.currentTarget.value);
            }}
          />
          <Label htmlFor="voivodeship" className="mb-[6px] font-medium">
            Województwo
          </Label>
          <Select onValueChange={(value) => setVoivodeship(value)}>
            <SelectTrigger
              id="voivodeship"
              className={
                voivodeship === "" ? "text-slate-400" : "text-slate-900"
              }
            >
              <SelectValue placeholder="Wybierz województwo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Wybierz województwo</SelectItem>
              {uniqueCities.map((city, i) => (
                <SelectItem
                  value={city.voivodeship}
                  key={`${city.voivodeship}, ${i}`}
                >
                  {city.voivodeship}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2 px-4 pt-8 text-sm text-slate-900">
          {filteredCities.map((city, i) => (
            <Link
              to={`miasto/${city.name.toLowerCase()}`}
              className="flex w-full items-start rounded-md border border-gray-200 py-2 pl-3"
              key={`${city}, ${i}`}
            >
              {city.name}
            </Link>
          ))}
        </div>
        <div className="mx-4 mt-auto text-sm">
          <button className="w-full rounded-md bg-slate-900 p-2 text-white transition-colors hover:bg-slate-700">
            Dodaj nowe miasto
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
