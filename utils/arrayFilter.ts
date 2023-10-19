import { TArrayFilterProps } from '@types'

/**
 * Filters an array of objects based on the values of specified keys.
 *
 * @param array - The array to filter.
 * @param key - The key to filter by.
 * @param values - The values to filter by. If conditionValue is provided, values is used for the "truthy" condition, otherwise for both "truthy" and "falsy" conditions.
 * @param conditionValue - A value that determines which filter condition to apply (truthy/falsy). If provided, uses `values` for the truthy condition.
 * @param exclude - If set to true, the function will filter out items that match the values, instead of including them.
 * @returns The filtered array of objects.
 */
const arrayFilter: TArrayFilterProps = (
  array,
  key,
  values,
  conditionValue,
  exclude = false,
) => {
  if (conditionValue) {
    return array.filter(item =>
      conditionValue ? values.includes(item[key]) : !values.includes(item[key]),
    )
  }

  if (exclude) {
    return array.filter(item => !values.includes(item[key]))
  }

  return array.filter(item => values.includes(item[key]))
}

export default arrayFilter
