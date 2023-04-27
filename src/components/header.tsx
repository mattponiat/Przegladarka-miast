import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

const Header = () => {
  return (
    <header className="flex h-16 w-full items-center justify-between border-b border-gray-200 px-20 py-5 text-slate-900">
      <a href="/" className="text-xl font-bold">
        Przeglądarka miast
      </a>
      <div>
        <nav className="flex gap-4 text-base font-medium">
          <Dialog>
            <DialogTrigger>O nas</DialogTrigger>
            <DialogContent>
              <DialogTitle>O nas</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae iusto dicta modi nesciunt in ullam debitis eveniet
                iure? Cum est deserunt nulla qui, aliquam aut sit quas deleniti
                a, dignissimos ullam itaque placeat! Hic et, eligendi fuga
                maiores neque veritatis nisi minus aliquam eum dolorem
                consequuntur laudantium quae cum aliquid.
              </DialogDescription>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger>Pomoc</DialogTrigger>
            <DialogContent>
              <DialogTitle>Pomoc</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, tempore! Temporibus nobis at exercitationem
                possimus quam? Omnis suscipit natus earum consequuntur! Atque
                dicta accusantium consequatur minus aperiam dolore. Adipisci sed
                impedit necessitatibus, soluta explicabo facilis officia ab
                dolor. Corporis quis non dolorem tenetur ipsum amet deserunt,
                iure suscipit consequuntur culpa!
              </DialogDescription>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger>Kontakt</DialogTrigger>
            <DialogContent>
              <DialogTitle>Kontakt</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
                ipsa dolor, eveniet ea non recusandae id earum inventore
                delectus, consequatur tenetur doloribus provident repudiandae
                magnam fuga. Cumque dolorem reiciendis praesentium quidem beatae
                porro doloribus quam officiis aperiam. Porro placeat aliquam
                reiciendis cumque perspiciatis totam, dolorem, adipisci autem
                dignissimos doloribus distinctio?
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </nav>
      </div>
    </header>
  );
};

export default Header;
