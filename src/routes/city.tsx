import {
  Link,
  LoaderFunctionArgs,
  useLoaderData,
  useRevalidator,
} from "react-router-dom";
import { deleteCity, getCity } from "../api/citiesApi";
import { Pencil, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "../components/ui/dialog";

const City = () => {
  const { city } = useLoaderData() as Awaited<ReturnType<typeof cityLoader>>;
  if (!city) throw new Error("City not found");

  const revalidator = useRevalidator();

  const handleDeleteCity = async () => {
    await deleteCity(city.id);
    revalidator.revalidate();
  };

  return (
    <div className="flex h-full w-full gap-14 overflow-auto overflow-x-hidden pl-6 pt-8">
      {city && (
        <>
          <div className="flex min-w-[600px] max-w-[600px] flex-col">
            <div className="flex items-center justify-between">
              <h1 className="text-[32px] font-semibold text-slate-900">
                {city.name}
              </h1>
              <div className="flex gap-3">
                <Link
                  to={`/cities/${city.name.toLowerCase()}/edit`}
                  className="flex items-center"
                >
                  <Pencil size={16} />
                </Link>
                <Dialog>
                  <DialogTrigger>
                    <Trash2 size={16} />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        Czy na pewno chcesz usunąć miasto?
                      </DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                      Kliknij przycisk aby usunąć miasto z listy.
                    </DialogDescription>
                    <DialogFooter>
                      <Link
                        to="/"
                        onClick={handleDeleteCity}
                        className="w-32 rounded-md bg-slate-900 px-4 py-2 text-center text-sm text-white transition-colors hover:bg-slate-700"
                      >
                        Usuń
                      </Link>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="my-6">
              <img
                src={city.picture_url}
                alt={city.name}
                width={600}
                height={400}
                className="aspect-[3/2] rounded-lg object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-3 pb-6">
              <h4 className="text-xl font-semibold text-slate-900">Opis</h4>
              <p className="text-base font-normal text-slate-800">
                {city.description}
              </p>
            </div>
          </div>
          <div className="flex w-full max-w-full flex-col gap-6 pr-6">
            <div className="flex flex-col">
              <h4 className="mb-6 mt-2 text-xl font-semibold text-slate-900">
                Znane miejsca
              </h4>
              <div className="flex flex-col gap-3">
                {city.known_places.map((place, i) => (
                  <span
                    key={i}
                    className="text-base font-medium text-slate-800"
                  >
                    {place}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <h4 className="mb-6 text-xl font-semibold text-slate-900">
                Interesujące linki
              </h4>
              <div className="flex max-w-full flex-col gap-3 pb-6">
                {city.links.map((link, i) => (
                  <a
                    target="_blank"
                    href={link}
                    key={i}
                    className="text-base font-medium text-slate-800 underline"
                  >
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
