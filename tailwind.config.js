module.exports = {
    mode: "jit",
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                primary: {
                    light: "#D5EAE3",
                },
                secondary: {
                    light: "#F3F1E7"
                }
            },
            backgroundImage: theme => ({
                'star-pattern-small': "url('https://www.starbucks.com/weblx/images/rewards/hero/hero-mobile_2021.jpg')",
                'star-pattern-big': "url('https://www.starbucks.com/weblx/images/rewards/hero/xl-hero-desktop_2021.png')",
            }),
            minHeight: {
                small: "78vh",
                bgSmall: "50%",
                imgS: "56px"
            },
            width: {
                bgSmall: "50%",
                verySm: "2px",
            },
            maxWidth: {
                small: "50px",
                medium: "110px"
            },
            screens: {
                smMd: "375px",
                mdLg: "782px",
                full: "1025px",
            },
            backgroundPosition: {
                half: "50%",
            },
            backgroundSize: {
                full: "100%",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}