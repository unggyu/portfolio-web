import { NewLineTextProps } from 'portfolio-web'
import React from 'react'

const NewLineText = ({ text }: NewLineTextProps) => (
  <>
    {text.split('\r\n').map((str, i) => (
      <React.Fragment key={i}>
        {str}
        <br />
      </React.Fragment>
    ))}
  </>
)

export default NewLineText
