export const createCache = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getCache = (key) => {
  return JSON.parse(localStorage.getItem(key))
}
