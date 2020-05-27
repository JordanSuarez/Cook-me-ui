export default (item) => {
  return {...item, search_name: item.name.toLowerCase()}
}
