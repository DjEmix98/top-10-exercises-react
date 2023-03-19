import { useContext } from "react"
import { ThemeContext } from "../hooks/useThemeContext"

export function ThemePage3rdLevel() {
    const theme = useContext(ThemeContext);
    return <p style={{backgroundColor: theme.theme}}>3rd level works!</p>
}