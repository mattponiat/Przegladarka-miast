import axios from "axios";
import { Cities } from "../types/types";

const citiesApi = axios.create({
  baseURL: "http://localhost:3000",
});

export const citiesUrlEndpoint = "/cities";

//Get all cities
export const getCities = async () => {
  const { data } = await citiesApi.get<Cities[]>(citiesUrlEndpoint);

  return data;
};

//Get city based on name
export const getCity = async (name: string) => {
  const { data } = await citiesApi.get<Cities[]>(citiesUrlEndpoint);

  const city = data.find(
    (city) => city.name.toLowerCase() === name.toLowerCase()
  );

  return city ?? null;
};

//Add new city
export const addCity = async ({
  name,
  voivodeship,
  description,
  picture_url,
  known_places,
  links,
}: Cities) => {
  const { data } = await citiesApi.post(citiesUrlEndpoint, {
    name,
    voivodeship,
    description,
    picture_url,
    known_places,
    links,
  });

  return data;
};

//Update city's data
export const updateCity = async (city: Cities) => {
  const { data } = await citiesApi.patch(citiesUrlEndpoint, city);

  return data;
};
