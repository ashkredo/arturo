import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        common: {
            black: '#19192B',
            white: '#ffffff',
        },
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
        grey: {
            '500': '#bcbcbc',
            '700': '#79797a',
        },
        info: {
            main: '#1bb2f1',
        },
        success: {
            main: '#00d589',
        },
        error: {
            main: '#832838',
        },
        background: {
            default: '#fff',
        },
    },
    typography: {
        fontFamily: 'Roboto',
    },
});

export default theme;