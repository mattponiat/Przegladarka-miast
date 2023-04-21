import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { getCity } from "../api/citiesApi";

const City = () => {
  const { city } = useLoaderData() as Awaited<ReturnType<typeof cityLoader>>;

  return (
    <div className="full-height flex w-full gap-14 pl-6 pt-8">
      {city && (
        <>
          <div className="flex w-full max-w-[600px] flex-col">
            <div className="flex justify-between">
              <h1 className="text-3xl font-semibold text-slate-900">
                {city.name}
              </h1>
              <div className="flex justify-center">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
            <div className="my-6">
              <img
                src={city.picture_url}
                width={600}
                height={400}
                className="aspect-[4/3] rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-xl font-semibold text-slate-900">Opis</h4>
              <p className="text-slate-800">{city.description}</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <h4 className="mb-6 text-xl font-semibold text-slate-900">
                Znane miejsca
              </h4>
              <div className="flex flex-col gap-3">
                {city.known_places.map((place, i) => (
                  <span key={i}>{place}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <h4 className="mb-6 text-xl font-semibold text-slate-900">
                Interesujące linki
              </h4>
              <div className="flex flex-col gap-3">
                {city.links.map((link, i) => (
                  <a target="_blank" href={link} key={i} className="underline">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

//React router data loader
type loaderProps = {
  params: {
    name: string;
  };
};

export const cityLoader = async ({
  params,
}: LoaderFunctionArgs | loaderProps) => {
  if (!params.name) throw new Error("No city name found");

  const city = await getCity(params.name.toLowerCase());

  return { city };
};

export default City;
