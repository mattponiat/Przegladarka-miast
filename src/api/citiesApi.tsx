import axios from "axios";
import { Cities } from "../types/types";

const citiesApi = axios.create({
  baseURL: "http://localhost:3000",
});

export const citiesUrlEndpoint = "/cities";

/**
 * Get all cities
 */
export const getCities = async () => {
  const { data } = await citiesApi.get<Cities[]>(citiesUrlEndpoint);

  return data;
};

/**
 * Get city based on city's name
 */
export const getCity = async (name: Cities["name"]) => {
  const { data } = await citiesApi.get<Cities[]>(citiesUrlEndpoint);

  const city = data.find(
    (city) => city.name.toLowerCase() === name.toLowerCase()
  );

  return city ?? null;
};

/**
 * Add new city with given props.
 * Returns city's data and post status
 */
export const addCity = async ({
  name,
  voivodeship,
  description,
  picture_url,
  known_places,
  links,
}: Cities) => {
  const { data, status } = await citiesApi.post<Cities>(citiesUrlEndpoint, {
    name,
    voivodeship,
    description,
    picture_url,
    known_places,
    links,
  });

  return { data, status };
};

/**
 * Update passed city's data
 */
export const updateCity = async (city: Cities) => {
  const { data } = await citiesApi.patch(
    `${citiesUrlEndpoint}/${city.id}`,
    city
  );

  return data;
};

/**
 * Delete city that matches city's id
 */
export const deleteCity = async (id: Cities["id"]) => {
  return await citiesApi.delete(`${citiesUrlEndpoint}/${id}`);
};
