import * as React from "react";
import SideBarLayout from "../components/sideBarLayout";
import { addCity } from "../api/citiesApi";
import { Form, Link } from "react-router-dom";
import { Cities } from "../types/types";
import FieldName from "../components/form/fieldName";
import FieldVoivodeship from "../components/form/fieldVoivodeship";
import FieldImage from "../components/form/fieldImage";
import FieldDesc from "../components/form/fieldDesc";
import FieldLink from "../components/form/fieldLinks";
import FieldPlaces from "../components/form/fieldPlaces";

const AddCity = () => {
  const [status, setStatus] = React.useState(0);
  const [city, updateCity] = React.useReducer(
    (prev: Cities, next: Partial<Cities>) => {
      return { ...prev, ...next };
    },
    {
      name: "",
      voivodeship: "",
      description: "",
      picture_url: "",
      known_places: [""],
      links: [""],
    }
  );

  const handleOnSubmit = async () => {
    await addCity({
      name: city.name,
      voivodeship: city.voivodeship,
      description: city.description,
      picture_url: city.picture_url,
      //Trim white space
      known_places: city.known_places
        .join(",")
        .trim()
        .split(",")
        .map((place) => place.trim()),
      //Trim white space
      links: city.links
        .join(",")
        .trim()
        .split(",")
        .map((link) => link.trim()),
    }).then((e) => setStatus(e.status));
  };

  return (
    <main className="full-height flex w-full">
      <SideBarLayout />
      <div className="flex h-full w-full flex-col px-6 pb-6 pt-8">
        <h1 className="mb-6 text-[32px] font-semibold">Dodaj nowe miasto</h1>
        <Form
          method="post"
          className="flex h-full flex-col gap-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <FieldName city={city} updateCity={updateCity} />
          <FieldVoivodeship city={city} updateCity={updateCity} />
          <FieldImage city={city} updateCity={updateCity} />
          <FieldDesc city={city} updateCity={updateCity} />
          <FieldLink city={city} updateCity={updateCity} />
          <FieldPlaces city={city} updateCity={updateCity} />
          <Link
            to={`/cities/${city.name}`}
            type="submit"
            className="mt-auto w-40 rounded-md bg-slate-900 px-4 py-2 text-center text-sm text-white transition-colors hover:bg-slate-700"
            onClick={handleOnSubmit}
          >
            Dodaj nowe miasto
          </Link>
        </Form>
      </div>
    </main>
  );
};

export default AddCity;
