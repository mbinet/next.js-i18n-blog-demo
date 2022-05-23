// Removes `false` values from class list

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

export default classNames;