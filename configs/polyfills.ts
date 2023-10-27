export const polyfills = (config: { entry: () => Promise<any> }): void => {
  const originalEntry = config.entry

  config.entry = async () => {
    const entries = await originalEntry()

    if (
      entries['main.js'] &&
      !entries['main.js'].includes('../lib/polyfills.ts')
    ) {
      entries['main.js'].unshift('../lib/polyfills.ts')
    }

    return entries
  }
}
