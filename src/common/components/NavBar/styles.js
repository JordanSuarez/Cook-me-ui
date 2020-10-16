export default ({palette}) => {
  return {
    root: {
      flexGrow: 1,
    },
    navBar: {
      backgroundColor: palette.common.grey.light,
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
      color: palette.common.grey.dark,
    },
    containerCreateRecipeButton: {
      '& .MuiButton-label': {
        flexDirection: 'row-reverse',
        marginRight: '0.5rem',
      },
    },
    createRecipeIcon: {
      marginRight: '1rem',
    },
    userIcon: {
      color: palette.common.grey.dark,
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
      marginLeft: '1rem',
    },
    button: {
      fontSize: '1rem',
      textTransform: 'none',
      color: palette.common.grey.dark,
    },
    currentButton: {
      '&:disabled': {
        textTransform: 'none',
        color: palette.common.dark,
        fontSize: '1.4rem',
        backgroundColor: '#FAFAFA',
        marginBottom: '-2rem',
        paddingBottom: '2.5rem',
      },
    },
  }
}
