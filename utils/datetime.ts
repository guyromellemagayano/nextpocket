import { TDatetimeProps } from '@types'

/**
 * Returns a formatted date and time string.
 *
 * @param data - The date string to format.
 * @returns A string in the format "Day Month Date Year at Time".
 */
const datetime: TDatetimeProps = data => {
  const date = new Date(data)

  if (isNaN(date.getTime())) {
    return 'Invalid Date'
  }

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const hours = date.getUTCHours()
  const period = hours < 12 ? 'AM' : 'PM'

  return `${days[date.getUTCDay()]} ${months[date.getUTCMonth()]} ${String(
    date.getUTCDate(),
  ).padStart(2, '0')} ${date.getUTCFullYear()} at ${hours % 12 || 12}:${String(
    date.getUTCMinutes(),
  ).padStart(2, '0')}:${String(date.getUTCSeconds()).padStart(
    2,
    '0',
  )} ${period}`
}

export default datetime
