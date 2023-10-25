/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'focus-visible' {
  const focusVisible: () => void
  export default focusVisible
}

declare module '*.module.css' {
  const styles: {
    [className: string]: string
  }

  export default styles
}
