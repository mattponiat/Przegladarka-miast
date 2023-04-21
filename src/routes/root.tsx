import { Outlet, useLoaderData } from "react-router-dom";
import { getCities } from "../api/citiesApi";
import SideBar from "../components/SideBar";

const Root = () => {
  const { cities } = useLoaderData() as Awaited<ReturnType<typeof rootLoader>>;

  return (
    <>
      <main className="full-height flex w-full">
        <SideBar cities={cities} />
        <Outlet />
      </main>
    </>
  );
};

//React router data loader
export const rootLoader = async () => {
  const cities = await getCities();

  return { cities };
};

export default Root;
