import React from "react";
import { useTheme } from "../../Context/ThemeContext";



const themesList = ["light", "dark", "blue", "green", "red", "purple"];

const ThemeSwitcher = () => {
  const { currentTheme, setCurrentTheme } = useTheme();

  return (
    <div className="flex gap-2">
      {themesList.map((theme) => (
        <button
          key={theme}
          onClick={() => setCurrentTheme(theme)}
          className="px-3 py-1 rounded bg-primary text-white hover:scale-105 transition-transform"
        >
          {theme}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
