import {createMuiTheme} from '@material-ui/core'

const palette = {
  common: '#ffffff',
  primary: {
    main: '#1c9cd8',
  },
  secondary: {
    main: '#35cd93',
    dark: '#4a4a4a',
    light: '#f8f8f8',
    medium: '#f0f0f0',
  },
}

const spacing = 3

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
