export default ({spacing}) => ({
  root: {
    height: '100vh',
    overflow: 'hidden',
  },
  image: {
    backgroundImage: 'url(images/tree.jpeg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '78vh',
  },
  button: {
    '& > *': {
      margin: spacing(1),
    },
  },
})
