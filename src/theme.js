const lightBlue = '#CFE4F2';
const blue = '#a9cbb7';
const lavender = '#725D68';
const salmon = '#e49273';
const independence = '#3d3a4b';
const white = '#fff';
const transparent = 'transparent';
const black = '#000';
const darkGray = '#333';
const lightGray = '#aaa'

const theme = {
    body: {
        bg: blue
    },
    main: {
        bg: white,
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
        fg: lavender,
        gradStart: lightBlue,
        gradEnd: '#eef6fc'
    },
    link: {
        color: lavender,
        hover: salmon
    },
    session: {
        bg: black,
        toolbar: darkGray,
        icons: lightGray,
        timer: white
    }
};

export default theme;