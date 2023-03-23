import { createContext, ReactElement, useEffect, useState } from "react";

const ThemeContext = createContext({
  isDarkMode: true,
  toggleThemeHandler: () => {},
});

interface ThemePropsInterface {
  children?: JSX.Element | Array<JSX.Element>;
}

export function ThemeContextProvider(props: ThemePropsInterface): ReactElement {
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(() => initialThemeHandler());

  function isLocalStorageEmpty(): boolean {
    return !localStorage.getItem("isDarkMode");
  }

  function initialThemeHandler(): void {
    if (isLocalStorageEmpty()) {
      localStorage.setItem("isDarkMode", `true`);
      document!.querySelector("body")!.classList.add("dark");
      setIsDarkMode(true);
    } else {
      const isDarkMode: boolean = JSON.parse(
        localStorage.getItem("isDarkMode")!
      );
      isDarkMode && document!.querySelector("body")!.classList.add("dark");
      setIsDarkMode(() => {
        return isDarkMode;
      });
    }
  }

  function toggleThemeHandler(): void {
    const isDarkMode: boolean = JSON.parse(
      localStorage.getItem("isDarkMode")!
    );
    setIsDarkMode(!isDarkMode);
    toggleDarkClassToBody();
    setValueToLocalStorage();
  }

  function toggleDarkClassToBody(): void {
    document!.querySelector("body")!.classList.toggle("dark");
  }

  function setValueToLocalStorage(): void {
    localStorage.setItem("isDarkMode", `${!isDarkMode}`);
  }

  return (
    <ThemeContext.Provider
      value={{ isDarkMode: true, toggleThemeHandler }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
