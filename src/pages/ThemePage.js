import { useState } from "react";
import { bgLime, bgYellow, ThemeContext } from "../hooks/useThemeContext";
import { ThemePage2ndLevel } from "./ThemePage2nLevel";

export function ThemePage() {
  const [theme, setTheme] = useState({ theme: bgYellow });

  const changeTheme = () =>
    theme.theme === bgYellow
      ? setTheme({ theme: bgLime })
      : setTheme({ theme: bgYellow });

  return (
    <>
      <h2 className="mb-4">N 1 - Use context api components</h2>
      <button onClick={() => changeTheme()}>
        Click here to change background
      </button>
      <ThemeContext.Provider value={theme}>
        <ThemePage2ndLevel></ThemePage2ndLevel>
      </ThemeContext.Provider>
    </>
  );
}
