import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between bg-black text-white text-lg p-6 ">
      <Link href="/">HORIZONS GAMES</Link>
      <nav>
        <ul>
          <li>
            <Link href="/team">TEAM</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
