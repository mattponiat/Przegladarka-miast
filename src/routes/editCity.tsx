import * as React from "react";
import { Form, Link, useLoaderData, useRevalidator } from "react-router-dom";
import { cityLoader } from "./city";
import { updateCity } from "../api/citiesApi";
import FieldDesc from "../components/form/fieldDesc";
import FieldImage from "../components/form/fieldImage";
import FieldLink from "../components/form/fieldLinks";
import FieldName from "../components/form/fieldName";
import FieldPlaces from "../components/form/fieldPlaces";
import FieldVoivodeship from "../components/form/fieldVoivodeship";
import SideBarLayout from "../components/sideBarLayout";
import { Cities } from "../types/types";

const EditCity = () => {
  const { city } = useLoaderData() as Awaited<ReturnType<typeof cityLoader>>;
  if (!city) throw new Error("City not found");

  const revalidator = useRevalidator();

  const [cityState, updateCityState] = React.useReducer(
    (prev: Cities, next: Partial<Cities>) => {
      return { ...prev, ...next };
    },
    {
      id: city.id,
      name: city.name,
      voivodeship: city.voivodeship,
      description: city.description,
      picture_url: city.picture_url,
      known_places: city.known_places,
      links: city.links,
    }
  );

  const handleOnSubmit = async () => {
    await updateCity(cityState);
    revalidator.revalidate();
  };

  return (
    <main className="full-height flex w-full">
      <SideBarLayout />
      <div className="flex h-full w-full flex-col px-6 pb-6 pt-8">
        <h1 className="mb-6 text-[32px] font-semibold">Edytuj miasto</h1>
        <Form method="PATCH" className="flex h-full flex-col gap-5">
          <FieldName city={cityState} updateCity={updateCityState} />
          <FieldVoivodeship city={cityState} updateCity={updateCityState} />
          <FieldImage city={cityState} updateCity={updateCityState} />
          <FieldDesc city={cityState} updateCity={updateCityState} />
          <FieldLink city={cityState} updateCity={updateCityState} />
          <FieldPlaces city={cityState} updateCity={updateCityState} />
          <Link
            to={`/cities/${cityState.name.toLowerCase()}`}
            type="submit"
            className="mt-auto w-40 rounded-md bg-slate-900 px-4 py-2 text-center text-sm text-white transition-colors hover:bg-slate-700"
            onClick={handleOnSubmit}
          >
            Zapisz
          </Link>
        </Form>
      </div>
    </main>
  );
};

export default EditCity;
