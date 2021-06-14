type Props = {
  color: 'red' | 'yellow' | 'green'
}

const Circle = ({ color }: Props) => {
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