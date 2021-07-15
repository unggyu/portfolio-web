import { CircleProps } from 'portfolio'

const Circle = ({ color }: CircleProps) => {
  const prefix = color === 'red' ? 'emojione' : 'twemoji'
  return (
    <span
      className="iconify"
      data-icon={`${prefix}:${color}-circle`}
      data-inline="false"
    />
  )
}

export default Circle