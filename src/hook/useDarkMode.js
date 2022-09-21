import { useState } from "react";
import { useEffect } from "react";

export default function useDarkMode() {
    const [theme, setTheme] = useState(localStorage.theme);
    const colorTheme = theme === 'dark' ? 'light' : 'dark';
    useEffect(() => {
        const html = window.document.documentElement;

        html.classList.remove(colorTheme);
        html.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme, colorTheme])

    return [colorTheme, setTheme];
}