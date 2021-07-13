import Image from 'next/image'
import { Icon } from '@iconify/react'
import { PolaroidProps, PolaroidIconsProps } from 'portfolio-web'
import styles from './Polaroid.module.scss'
import getLogoIcon from '../utils/icon'

const Polaroid = ({ imagePath, representativeSkills, style }: PolaroidProps) => (
  <div className="polaroid" style={style}>
    <span style={{ cursor: 'auto' }}>
      <div className="unset-img">
        <Image
          className="custom-img"
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