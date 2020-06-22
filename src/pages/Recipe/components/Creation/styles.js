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
  ingredientContainer: {
    marginTop: '15px',
  },
  icon: {
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
  },
  radioField: {
    alignSelf: 'center',
    marginTop: '10px',
  },
  border: {
    borderRadius: '1px',
    border: '1px solid #DBDEE0',
    marginLeft: '10px',
  },
  radio: {
    marginTop: '10px',
  },
  instructionField: {
    marginTop: '5px',
  },
  selectField: {
    marginTop: '10px',
  },
})
