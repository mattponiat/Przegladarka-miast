import {
  Form,
  useLoaderData,
  useNavigate,
  useRevalidator,
} from "react-router-dom";
import { cityLoader } from "./city";
import { updateCity } from "../api/citiesApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { schema, FormData } from "./addCity";
import FieldDesc from "../components/form/fieldDesc";
import FieldImage from "../components/form/fieldImage";
import FieldLink from "../components/form/fieldLinks";
import FieldName from "../components/form/fieldName";
import FieldPlaces from "../components/form/fieldPlaces";
import FieldVoivodeship from "../components/form/fieldVoivodeship";
import SideBarLayout from "../components/sideBarLayout";

const EditCity = () => {
  const { city } = useLoaderData() as Awaited<ReturnType<typeof cityLoader>>;
  if (!city) throw new Error("City not found");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: city.name,
      voivodeship: city.voivodeship,
      picture_url: city.picture_url,
      description: city.description,
      links: city.links.join(","),
      known_places: city.known_places.join(","),
    },
  });

  const navigation = useNavigate();
  const revalidator = useRevalidator();

  const handleOnSubmit = async (formData: FormData) => {
    if (!city.id) throw new Error("No city found");

    //Trim white space and convert strings into array of strings on "links" and "known_places"
    await updateCity(
      {
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
          .map((link) => link.trim()),
      },
      city.id
    );
    revalidator.revalidate();
    navigation(`/cities/${formData.name}`);
  };

  return (
    <main className="full-height flex w-full overflow-hidden">
      <SideBarLayout />
      <div className="flex h-full w-full flex-col overflow-auto px-6 pb-6 pt-8">
        <h1 className="mb-6 text-[32px] font-semibold">Edytuj miasto</h1>
        <Form
          method="PATCH"
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
          >
            Zapisz
          </button>
        </Form>
      </div>
    </main>
  );
};

export default EditCity;
