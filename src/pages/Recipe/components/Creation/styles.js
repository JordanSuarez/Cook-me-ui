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
  buttonBorder: {
    borderRadius: '1px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: palette.common.grey.light,
    marginLeft: '10px',
    color: palette.common.grey.medium,
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
  ctaButton: {
    direction: 'rtl',
    marginTop: '10px',
  },
  submitButton: {
    marginTop: '10px',
  },
})
