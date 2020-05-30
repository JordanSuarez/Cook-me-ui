export default ({spacing}) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: spacing(2),
    },
  },
})
