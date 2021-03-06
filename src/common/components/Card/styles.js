export default ({palette}) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  shadow: {
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
  },
  link: {
    textDecoration: 'none',
    color: palette.common.grey.dark,
  },
})
