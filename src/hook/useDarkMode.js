import { useState } from "react";
import { useEffect } from "react";

export default function useDarkMode() {
    const [theme, setTheme] = useState(localStorage.theme);
    const colorTheme = theme === 'dark' ? 'light' : 'dark';
    useEffect(() => {
        const html = document.documentElement;
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add(theme);
          } else {
            html.classList.remove(colorTheme);
          }   
        localStorage.setItem("theme", theme);
    }, [theme, colorTheme])

    return [colorTheme, setTheme];
}