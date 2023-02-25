const imgOnClickNavigate = (i, item) => {
  const { link, navigate } = item?.props || {}
  if (link) {
    return navigate(link)
  }
  return null
}

export default imgOnClickNavigate
