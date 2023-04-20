const Header = () => {
  return (
    <header className="w-full h-16 flex py-5 px-20 items-center text-slate-900 justify-between border-gray-200 border-b">
      <a href="/" className="text-xl font-bold">
        Przeglądarka miast
      </a>
      <div>
        <nav className="flex gap-4 font-medium text-base">
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
