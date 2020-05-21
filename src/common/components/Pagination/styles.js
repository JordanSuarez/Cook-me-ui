export default ({spacing}) => ({
  root: {
    '& > * + *': {
      marginTop: spacing(2),
    },
  },
})
