export default ({spacing, palette}) => ({
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
  timerIcon: {
    marginTop: '30px',
    color: palette.common.grey.medium,
  },
  radioField: {
    alignSelf: 'center',
    marginTop: '10px',
  },
  border: {
    borderRadius: '1px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: palette.common.grey.light,
    marginLeft: '10px',
    color: palette.common.grey.medium,
  },
  radio: {
    marginTop: '10px',
  },
  instructionField: {
    marginTop: '15px',
  },
  selectField: {
    marginTop: '10px',
  },
  buttonLabel: {
    textTransform: 'none',
    color: palette.common.grey.dark,
  },
  footer: {
    marginTop: '20px',
  },
  submitButton: {
    textTransform: 'none',
  },
})
