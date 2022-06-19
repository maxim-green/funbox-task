export const formatDecimal = (number, decimalSeparator = '.') => {
  return number.toString().replace(/\./, decimalSeparator)
}
