module.exports = {
    mode: 'jit',
    important: true,
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            'inter' : 'Inter, sans-serif',
        },
        backgroundColor: theme => ({
            ...theme('colors'),
            'offwhite': '#F5F7FA',
            'blue': '#2D60FF',
            'yellow': '#FFAA07',
            'white' : '#FFFFFF',
            'lightgrey': '#DFEAF2',
            'seagreen': '#16DBCC',
            'primary': '#3855B3',
            'lightyellow': '#FFF7E7',
        }),
        borderColor: theme => ({
            ...theme('colors'),
            DEFAULT: theme('colors.gray.300', 'currentColor'),
            'offwhite': '#F5F7FA',
            'offwhite2':'#E6EFF5',
            'offwhite3': '#F4F5F7',
            'lightgrey': '#DFEAF2',
            'seablue': '#123288',
        }),
        textColor: theme => ({
            ...theme('colors'),
            'lightblue': '#8BA3CB',
            'lightblack': '#505887',
            'darkblack': '#343C6A',
            'darkblue': '#718EBF',
            'blue': '#2D60FF',
            'green' : '#16DBAA',
            'red' : '#FE5C73',
            'black': '#333B69',
            'white': '#FFFFFF',
            'seablue': '#123288',
        }),
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
