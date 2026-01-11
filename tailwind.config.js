/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#121212",
                paper: "#F5F5F5",
                primary: "#CCFF00",
                surface: "#1E1E1E",
            },
            fontFamily: {
                sans: ['Oswald', 'sans-serif'],
                mono: ['Courier New', 'monospace'], // Fallback for specialized mono
            },
        },
    },
    plugins: [],
}
