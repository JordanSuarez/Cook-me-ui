export default ({spacing}) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: spacing(2),
    },
  },
  toast: {
    padding: '0px 2px 2px',
  },
})
