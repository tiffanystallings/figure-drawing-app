const lightBlue = '#CFE4F2';
const blue = '#a9cbb7';
const lavender = '#725D68';
const salmon = '#e49273';
const independence = '#3d3a4b';
const white = '#fff';
const transparent = 'transparent';

const theme = {
    main: {
        bg: blue,
        fg: independence,
        font: 'Roboto'
    },
    header: {
        bg: independence,
        fg: lightBlue,
        font: 'DancingScript',
        subtitle: lavender
    },
    button: {
        bg: salmon,
        fg: white,
        inverted: {
            border: salmon,
            fg: salmon,
            bg: transparent
        },
    },
    displayArea: {
        bg: lightBlue,
        fg: lavender
    },
    link: {
        color: lavender,
        hover: salmon
    }

};

export default theme;