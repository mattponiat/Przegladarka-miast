import * as React from "react";
import { Link } from "react-router-dom";
import { Cities } from "../types/types";
import Input from "./ui/input";
import Label from "./ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import SideBarLayout from "./sideBarLayout";
import { NavLink } from "react-router-dom";

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
        array.findIndex(
          (t) => t.voivodeship.toLowerCase() === value.voivodeship.toLowerCase()
        ) === index
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
    <SideBarLayout>
      <div className="flex h-full flex-col pb-6">
        <div className="flex flex-col border-b border-gray-200 px-4 pb-6 pt-8">
          <Label htmlFor="search" className="mb-[6px] w-fit font-medium">
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
          <Label htmlFor="voivodeship" className="mb-[6px] w-fit font-medium">
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
        <div className="flex flex-col gap-2 overflow-auto px-4 pt-8">
          {filteredCities.map((city, i) => (
            <NavLink
              to={`cities/${city.name.toLowerCase()}`}
              className={({ isActive, isPending }) =>
                `w-full rounded-md border border-gray-200 py-2 pl-3 ${
                  isActive || isPending ? "bg-slate-100" : ""
                }`
              }
              key={`${city}, ${i}`}
            >
              {city.name}
            </NavLink>
          ))}
        </div>
        <div className="mt-auto px-4 pt-6">
          <Link
            to="add-city"
            className="block w-full rounded-md bg-slate-900 px-4 py-2 text-center text-white transition-colors hover:bg-slate-700"
          >
            Dodaj nowe miasto
          </Link>
        </div>
      </div>
    </SideBarLayout>
  );
};

export default SideBar;
