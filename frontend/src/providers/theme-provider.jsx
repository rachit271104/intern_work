import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "ui-theme",
  darkModeClass = "dark-mode",
}) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return defaultTheme;
    return localStorage.getItem(storageKey) || defaultTheme;
  });

  useEffect(() => {
    const root = window.document.documentElement;

    const applyTheme = () => {
      if (theme === "system") {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        root.classList.toggle(darkModeClass, isDark);
        localStorage.removeItem(storageKey);
      } else {
        root.classList.toggle(darkModeClass, theme === "dark");
        localStorage.setItem(storageKey, theme);
      }
    };

    applyTheme();

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = () => theme === "system" && applyTheme();

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [theme, darkModeClass, storageKey]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
