import { CircleProps } from 'portfolio-web'

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