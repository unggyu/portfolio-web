import Image from 'next/image'
import { Icon } from '@iconify/react'
import { PolaroidProps, PolaroidIconsProps } from 'portfolio-web'
import styles from './Polaroid.module.scss'
import getLogoIcon from '../utils/icon'

const Polaroid = ({ imagePath, representativeSkills, style }: PolaroidProps) => (
  <div className="polaroid" style={style}>
    <span style={{ cursor: 'auto' }}>
      <div style={{ position: 'relative', width: 187.5, height: 250 }}>
        <Image
          layout="fill"
          objectFit="cover"
          src={imagePath}
          alt="Avator placeholder"
        />
      </div>
      {representativeSkills ?
        <Icons representativeSkills={representativeSkills} /> :
        null}
    </span>
  </div>
)

const Icons = ({ representativeSkills }: PolaroidIconsProps) => (
  <>
    {representativeSkills.map((skill, i) => (
      <Icon
        key={i}
        className={styles.icon}
        icon={getLogoIcon(skill)}
      />
    ))}
  </>
)

export default Polaroid