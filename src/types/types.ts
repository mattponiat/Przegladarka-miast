import { FieldErrors } from "react-hook-form";

export type Cities = {
  id?: number;
  name: string;
  voivodeship: string;
  description: string;
  picture_url: string;
  known_places: string[];
  links: string[];
};

export type FormFieldProps = {
  errors: FieldErrors<{
    name: string;
    voivodeship: string;
    description: string;
    picture_url: string;
    known_places: string[];
    links: string[];
  }>;
};
