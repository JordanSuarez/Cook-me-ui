export default ({spacing}) => ({
  root: {
    overflow: 'visible',
    flexGrow: 1,
  },
  paper: {
    padding: spacing(2),
    marginTop: spacing(3),
    width: '100%',
  },
  container: {
    marginRight: '0px',
  },
  alignField: {
    marginTop: '-16px',
  },
  ingredientContainer: {
    marginTop: '15px',
  },
  button: {
    alignSelf: 'flex-end',
  },
})
