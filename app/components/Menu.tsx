import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  isMenuOpen: boolean;
  toggleMenu: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ isMenuOpen, toggleMenu }: IProps) => {
  return (
    <>
      {isMenuOpen && (
        <nav className="bg-black text-white w-full py-3 flex flex-col">
          <ul>
            <Link href="/">
              <li className="p-3 rounded bg-blue-900 my-3 w-full">Home</li>
            </Link>
            <Link href="/team">
              <li className="p-3 rounded bg-blue-900 my-3 w-full">Team</li>
            </Link>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Menu;
