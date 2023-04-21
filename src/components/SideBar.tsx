import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="full-height text-slate-90 w-full max-w-sm border-r border-gray-200 px-2 pl-14 text-base">
      <div className="full-height flex flex-col px-4 pb-6">
        <div className="flex flex-col border-b border-gray-200 pb-6 pt-8">
          <label htmlFor="search" className="mb-1 font-medium">
            Wyszukaj
          </label>
          <input
            id="search"
            name="search"
            type="search"
            className="mb-4 w-full rounded-md border border-gray-200 py-2 pl-3"
            placeholder="Wpisz nazwę miasta"
          />
          <label htmlFor="voivodeship" className="mb-1 font-medium">
            Województwo
          </label>
          <select
            id="voivodeship"
            name="voivodeship"
            className="w-full rounded-md border border-gray-200 py-2 pl-3"
            defaultValue="Wybierz województwo"
          >
            <option disabled>Wybierz województwo</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 pt-8 text-slate-900">
          <Link
            to={`miasto/warszawa`}
            className="flex w-full items-start rounded-md border border-gray-200 py-2 pl-3"
          >
            Miasto
          </Link>
          <Link
            to={`miasto/poznan`}
            className="flex w-full items-start rounded-md border border-gray-200 py-2 pl-3"
          >
            Miasto
          </Link>
        </div>
        <button className="mt-auto w-full rounded-md bg-slate-900 p-2 text-white hover:bg-slate-800">
          Dodaj nowe miasto
        </button>
      </div>
    </div>
  );
};

export default SideBar;
