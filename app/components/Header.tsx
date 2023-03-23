import Link from "next/link";
import {
  useContext,
  useState,
} from "react";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import LanguageSelector from "./LanguageSelector";
import useTranslation from "next-translate/useTranslation";
import { Horizons, HorizonsWhite } from "./Horizons";
import ThemeContext from "../../store/ThemeContext";

const Header = () => {
  const [isMenuOpen, toggleMenu] = useState(false);
  const { t } = useTranslation("common");

  const themeContext: {
    isDarkMode?: boolean;
    toggleThemeHandler: () => void;
  } = useContext(ThemeContext);

  function toggleThemeHandler(): void {
    themeContext.toggleThemeHandler();
  }

  const isDarkMode = themeContext.isDarkMode;

  return (
    <header
      className={`flex flex-col text-lg p-6 sm:flex-row
      text-neutral-100 bg-neutral-900`}
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          {isDarkMode ? (
            <HorizonsWhite className="ml-4 h-12 w-12" priority />
          ) : (
            <Horizons className="ml-4 h-12 w-12" priority />
          )}
        </Link>
        <nav className="hidden sm:block sm:mx-12">
          <ul className="flex">
            <Link href="/team">
              <li className="mx-4">{t("TEAM")}</li>
            </Link>
            <Link
              href={{
                pathname: "/blog",
                query: { page: 1 },
              }}
            >
              <li className="mx-4">{t("BLOG")}</li>
            </Link>
          </ul>
        </nav>
        <div onClick={toggleThemeHandler}>
          <FontAwesomeIcon
            icon={faLightbulb}
            className="text-xl dark:text-neutral-100 text-neutral-900"
          />
        </div>
        <div className="hidden sm:block absolute right-4">
          <LanguageSelector />
        </div>
        <div
          className="flex sm:hidden absolute right-8"
          onClick={() => toggleMenu(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={faBars} className="text-xl" />
        </div>
      </div>
      <Menu isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default Header;
