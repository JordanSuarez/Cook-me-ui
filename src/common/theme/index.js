import {createMuiTheme} from '@material-ui/core'

const palette = {
  common: {
    white: '#ffffff',
    grey: {
      dark: '#2c2c2c',
      light: '#e9e9e9',
    },
  },
  primary: {
    main: '#42A6A6',
    light: '#9BDADA',
    medium: '#F2CB06',
  },
  secondary: {
    main: '#F01CBA',
    light: '#F272A1',
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
