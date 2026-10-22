import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("app_theme");
    return savedTheme || "dark";
  });

  const [dir, setDir] = useState(() => {
    const savedDir = localStorage.getItem("app_dir");
    return savedDir || "ltr";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }

    localStorage.setItem("app_theme", theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("dir", dir);
    root.setAttribute("lang", dir === "rtl" ? "ar" : "en");
    localStorage.setItem("app_dir", dir);
  }, [dir]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleDir = () => {
    setDir((prev) => (prev === "ltr" ? "rtl" : "ltr"));
  };

  const isDark = theme === "dark";
  const isRtl = dir === "rtl";

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        isDark,
        dir,
        setDir,
        toggleDir,
        isRtl
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

/* eslint-disable-next-line react-refresh/only-export-components */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export default ThemeContext;
