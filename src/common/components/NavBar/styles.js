export default ({palette}) => {
  return {
    root: {
      flexGrow: 1,
    },
    navBar: {
      backgroundColor: palette.primary.medium,
      padding: 0,
    },
    toolBar: {
      padding: 0,
    },
    gridMenuButton: {
      textAlign: 'left',
      paddingLeft: '0.5rem',
    },
    menuButton: {
      textAlign: 'left',
      color: palette.primary.main,
    },
    userIcon: {
      color: palette.primary.main,
    },
    logoutIcon: {
      marginLeft: '0.8rem',
    },
    gridContainer: {
      justifyContent: 'space-between',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'right',
    },
    linkContainer: {
      display: 'flex',
    },
    button: {
      margin: '0.5rem 0.2rem',
      fontSize: '1.1rem',
    },
    currentButton: {
      '&:disabled': {
        color: palette.primary.main,
        margin: '0.5rem 0.2rem',
        fontSize: '1.5rem',
      },
    },
  }
}
