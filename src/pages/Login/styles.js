export default ({palette, spacing}) => ({
  root: {
    height: '100vh',
    overflow: 'visible',
  },
  title: {
    color: palette.primary.main,
  },
  image: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/login.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: palette.secondary.medium,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transform: 'scaleX(-1)',
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
