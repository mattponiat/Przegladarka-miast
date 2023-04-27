import { addCity } from "../api/citiesApi";
import {
  Form,
  useLoaderData,
  useNavigate,
  useRevalidator,
} from "react-router-dom";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SideBarLayout from "../components/sideBarLayout";
import FieldName from "../components/form/fieldName";
import FieldVoivodeship from "../components/form/fieldVoivodeship";
import FieldImage from "../components/form/fieldImage";
import FieldDesc from "../components/form/fieldDesc";
import FieldLink from "../components/form/fieldLinks";
import FieldPlaces from "../components/form/fieldPlaces";
import { rootLoader } from "./root";

export const polishAlphabetRegex = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ-]+$/;

//Check if an image provided in url returns a real image
export const isImage = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: "HEAD" });
    const contentType = response.headers.get("content-type");
    return contentType != null && contentType.startsWith("image/");
  } catch (err) {
    throw new Error("Failed to fetch image from URL");
  }
};

const AddCity = () => {
  const { cities } = useLoaderData() as Awaited<ReturnType<typeof rootLoader>>;

  const addCitySchema = z
    .object({
      name: z
        .string()
        .trim()
        .nonempty("Nazwa miasta jest wymagana")
        .refine(
          (input) => polishAlphabetRegex.test(input),
          "Nazwa może zawierać jedynie znaki polskiego alfabetu oraz myślniki"
        )
        .refine((input) => {
          const existingCity = cities.find(
            (city) => city.name.toLowerCase() === input.trim().toLowerCase()
          );
          if (existingCity) {
            return false;
          }
          return true;
        }, "Nazwa miasta już istnieje"),
      voivodeship: z.string().nonempty("Województwo jest wymagane"),
      picture_url: z
        .string()
        .url("Nieprawidłowy URL zdjęcia")
        .refine(async (url) => {
          try {
            return await isImage(url);
          } catch (err) {
            return false;
          }
        }, "Nieprawidłowy URL zdjęcia"),
      description: z
        .string()
        .min(25, "Opis miasta musi zawierać minimum 25 znaków")
        .max(2000, "Opis miasta może zawierać maksymalnie 2000 znaków"),
      links: z.string().url("Link jest nieprawidłowy"),
      known_places: z
        .string()
        .min(10, "Znane miejsca muszą mieć minimum 10 znaków")
        .max(40, "Znane miejsca mogą mieć maksymalnie 40 znaków"),
    })
    .required();
  type FormData = z.infer<typeof addCitySchema>;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(addCitySchema),
    defaultValues: {
      name: "",
      voivodeship: "",
      picture_url: "",
      description: "",
      links: "",
      known_places: "",
    },
  });

  const navigation = useNavigate();
  const revalidator = useRevalidator();

  const handleOnSubmit = async (formData: FormData) => {
    //Trim white space and convert strings into array of strings on "links" and "known_places"
    await addCity({
      name: formData.name,
      voivodeship: formData.voivodeship,
      picture_url: formData.picture_url,
      description: formData.description,
      links: formData.links
        .trim()
        .split(",")
        .map((link) => link.trim()),
      known_places: formData.known_places
        .trim()
        .split(",")
        .map((place) => place.trim()),
    });
    revalidator.revalidate();
    navigation(`/cities/${formData.name}`);
  };

  return (
    <main className="full-height flex w-full overflow-hidden">
      <SideBarLayout />
      <div className="flex h-full w-full flex-col overflow-auto px-6 pb-6 pt-8">
        <h1 className="mb-6 text-[32px] font-semibold">Dodaj nowe miasto</h1>
        <Form
          method="POST"
          onSubmit={handleSubmit(handleOnSubmit)}
          className="flex h-full flex-col gap-5"
        >
          <Controller
            control={control}
            name="name"
            render={({ field }) => {
              return <FieldName {...register} errors={errors} field={field} />;
            }}
          />
          <Controller
            control={control}
            name="voivodeship"
            render={({ field }) => (
              <FieldVoivodeship {...register} errors={errors} field={field} />
            )}
          />
          <Controller
            control={control}
            name="picture_url"
            render={({ field }) => (
              <FieldImage {...register} errors={errors} field={field} />
            )}
          />
          <Controller
            control={control}
            name="description"
            render={({ field }) => (
              <FieldDesc {...register} errors={errors} field={field} />
            )}
          />
          <Controller
            control={control}
            name="links"
            render={({ field }) => (
              <FieldLink {...register} errors={errors} field={field} />
            )}
          />
          <Controller
            control={control}
            name="known_places"
            render={({ field }) => (
              <FieldPlaces {...register} errors={errors} field={field} />
            )}
          />
          <button
            type="submit"
            className="mt-auto w-40 rounded-md bg-slate-900 px-4 py-2 text-center text-sm text-white transition-colors hover:bg-slate-700"
            data-testid="SubmitAddCityButton"
          >
            Dodaj nowe miasto
          </button>
        </Form>
      </div>
    </main>
  );
};

export default AddCity;
