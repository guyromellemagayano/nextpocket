/**
 * Returns a formatted date and time string.
 * @param data - The date string to format.
 * @returns A string in the format "Day Month Date Year at Time".
 */
const datetime = (data: string): string => {
  const date = new Date(data)

  return `${date.toDateString()} at ${date.toLocaleTimeString()}`
}

export default datetime
