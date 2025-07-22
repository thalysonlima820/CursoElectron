import { CaretLeft, CaretRight } from "phosphor-react";


type HeaderProps = {
  toggleSidebar: () => void;
  isOpen: boolean;
};

export function Header({ toggleSidebar, isOpen }: HeaderProps) {
  return (
    <header className="header">
      <button className="sidebar-toggle" onClick={toggleSidebar}>
      {isOpen ? <CaretLeft size={20} /> : <CaretRight size={20} />}
      </button>
      <h1 className="header-title">Dev Clientes</h1>
    </header>
  );
}
