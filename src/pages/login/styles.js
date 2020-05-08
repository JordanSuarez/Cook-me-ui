export default ({palette, spacing}) => ({
  root: {
    height: '100vh',
  },
  title: {
    color: palette.primary.main,
  },
  image: {
    backgroundImage: 'url(images/login.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: palette.secondary.medium,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    margin: spacing(1),
    backgroundColor: palette.primary.medium,
  },
  submit: {
    marginTop: spacing(3),
    color: palette.common.white,
  },
})
