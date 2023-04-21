import { Outlet, useLoaderData } from "react-router-dom";
import { getCities } from "../api/citiesApi";
import SideBar from "../components/SideBar";

const Root = () => {
  const cities = useLoaderData();

  return (
    <>
      <main className="full-height flex w-full">
        <SideBar />
        <Outlet />
      </main>
    </>
  );
};

//React router loader
export const citiesLoader = async () => {
  const data = await getCities();

  return { data };
};

export default Root;
