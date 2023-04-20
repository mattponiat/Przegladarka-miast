const SideBar = () => {
  return (
    <div className="w-96 border-gray-200 full-height border-r pl-14 text-slate-900">
      <div className="flex flex-col px-6">
        <div className="flex flex-col border-gray-200 border-b pt-8 pb-6">
          <label htmlFor="search" className="mb-1 font-medium">
            Wyszukaj
          </label>
          <input
            id="search"
            name="search"
            type="search"
            className="w-full border border-gray-200 rounded-md text-sm py-2 pl-3 mb-4"
            placeholder="Wpisz nazwę miasta"
          />
          <label htmlFor="voivodeship" className="mb-1 font-medium">
            Województwo
          </label>
          <select
            id="voivodeship"
            name="voivodeship"
            className="w-full border border-gray-200 rounded-md text-sm py-2 pl-3"
          >
            <option selected disabled>
              Wybierz województwo
            </option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="text-slate-900">
          <button className="w-full flex items-start border-gray-200 border rounded-md text-sm py-2 pl-3 mt-10">
            Jakies miasto
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
