const Header = () => {
  return (
    <header className="flex h-16 w-full items-center justify-between border-b border-gray-200 px-20 py-5 text-slate-900">
      <a href="/" className="text-xl font-bold">
        Przeglądarka miast
      </a>
      <div>
        <nav className="flex gap-4 text-base font-medium">
          <label htmlFor="my-modal-1" className="cursor-pointer">
            O nas
          </label>
          <input type="checkbox" id="my-modal-1" className="modal-toggle" />
          <label htmlFor="my-modal-1" className="modal cursor-pointer">
            <label className="modal-box relative" htmlFor="">
              <h3 className="text-lg font-bold">O nas</h3>
              <p className="py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                obcaecati praesentium blanditiis et. Consequuntur optio tenetur
                eos! Cupiditate nesciunt omnis est praesentium dolores illum,
                veniam voluptatum consectetur vel nulla cumque officiis fugit
                similique iste repellendus iusto pariatur amet voluptatibus
                quos! Ullam fugiat voluptas id nam doloremque facere odio
                aliquid reprehenderit?
              </p>
            </label>
          </label>
          <label htmlFor="my-modal-2" className="cursor-pointer">
            Pomoc
          </label>
          <input type="checkbox" id="my-modal-2" className="modal-toggle" />
          <label htmlFor="my-modal-2" className="modal cursor-pointer">
            <label className="modal-box relative" htmlFor="">
              <h3 className="text-lg font-bold">Pomoc</h3>
              <p className="py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                obcaecati praesentium blanditiis et. Consequuntur optio tenetur
                eos! Cupiditate nesciunt omnis est praesentium dolores illum,
                veniam voluptatum consectetur vel nulla cumque officiis fugit
                similique iste repellendus iusto pariatur amet voluptatibus
                quos! Ullam fugiat voluptas id nam doloremque facere odio
                aliquid reprehenderit?
              </p>
            </label>
          </label>
          <label htmlFor="my-modal-3" className="cursor-pointer">
            Kontakt
          </label>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <label htmlFor="my-modal-3" className="modal cursor-pointer">
            <label className="modal-box relative" htmlFor="">
              <h3 className="text-lg font-bold">Kontakt</h3>
              <p className="py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                obcaecati praesentium blanditiis et. Consequuntur optio tenetur
                eos! Cupiditate nesciunt omnis est praesentium dolores illum,
                veniam voluptatum consectetur vel nulla cumque officiis fugit
                similique iste repellendus iusto pariatur amet voluptatibus
                quos! Ullam fugiat voluptas id nam doloremque facere odio
                aliquid reprehenderit?
              </p>
            </label>
          </label>
        </nav>
      </div>
    </header>
  );
};

export default Header;
