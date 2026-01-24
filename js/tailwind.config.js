tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#256af4",
                "background-light": "#f5f6f8",
                "background-dark": "#101622",
                "surface-dark": "#182234",
                "text-secondary": "#90a4cb",
                "text-main": "#0d121b",
                "text-dark-main": "#f8f9fc"
            },
            fontFamily: {
                "display": ["Inter", "sans-serif"],
                "body": ["Noto Sans", "sans-serif"]
            },
            borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
        },
    },
}
