import React from 'react'

declare module 'react-typical' {
  export type TypicalProps = {
    steps: (string | number)[]
    loop?: number
    className?: string
    wrapper?: string
  }
  function Typical({  }: TypicalProps): JSX.Element
  export default Typical
}