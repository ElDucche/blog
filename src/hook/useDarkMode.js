import { useState } from "react";
import { useEffect } from "react";

export default function useDarkMode() {
    const checkout = typeof window !== 'undefined' ? localStorage.getItem('theme') : 'dark'
    const [theme, setTheme] = useState(checkout);
    const colorTheme = theme === 'dark' ? 'light' : 'dark';
    useEffect(() => {
        const html = document.documentElement;

        html.classList.remove(colorTheme);
        html.classList.add(theme);  
        localStorage.setItem("theme", theme);
    }, [theme, colorTheme])

    return [colorTheme, setTheme];
}