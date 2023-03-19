import "../assets/styles/ThemePage2ndLevel.css";
import { ThemePage3rdLevel } from "./ThemePage3rdLevel";

export function ThemePage2ndLevel() {
  return (
    <div className="theme-page-2nd-level__wrapper">
      <p>2nd Level</p>
      <ThemePage3rdLevel></ThemePage3rdLevel>
    </div>
  );
}
