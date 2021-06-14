import { HTMLProps } from 'react'
import { Icon } from '@iconify/react'
import styles from './Polaroid.module.scss'
import getLogoIcon from '../utils/icon'

type Props = HTMLProps<HTMLElement> & {
  imagePath: string
  representativeSkills?: string[]
}

const Polaroid = ({ imagePath, representativeSkills, style }: Props) => {
  let icons: JSX.Element[]
  if (representativeSkills) {
    icons = representativeSkills.map((skill, i) => (
      <Icon
        key={i}
        className={styles.icon}
        icon={getLogoIcon(skill)}
      />
    ))
  }

  return (
    <div className="polaroid" style={style}>
      <span style={{ cursor: 'auto' }}>
        <img
          height="250px"
          src={imagePath}
          alt="Avator placeholder"
        />
        {icons}
      </span>
    </div>
  )
}

export default Polaroid