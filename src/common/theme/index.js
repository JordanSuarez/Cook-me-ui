import {createMuiTheme} from '@material-ui/core'

const palette = {
  common: {
    white: '#ffffff',
    dark: '#2c2c2c',
    grey: {
      dark: '#757575',
      medium: '#B8B8B8',
      light: '#E4E6E7',
    },
  },
  primary: {
    main: '#B3DA2A',
    light: '#F2BC1B',
    medium: '#734F3C',
  },
  secondary: {
    main: '#F27910',
    medium: '#F23C91',
  },
}

const spacing = 8

const shape = {
  borderRadius: 5,
}

const font = {
  main: 'Roboto',
}

export default createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette,
  spacing,
  shape,
  font,
})
