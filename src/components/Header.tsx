const Header = () => {
  return (
    <header className="w-full h-16 flex py-5 px-20 items-center text-slate-900 justify-between border-b-[#E5E7EB] border">
      <a href="/" className="text-xl font-bold">
        Przeglądarka miast
      </a>
      <div>
        <nav className="flex gap-4 font-medium text-base">
          <span>O nas</span>
          <span>Pomoc</span>
          <span>Kontakt</span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
