import { HTMLProps } from 'react'
import { Icon } from '@iconify/react'
import angularIcon from '@iconify/icons-logos/angular-icon'
import reactIcon from '@iconify/icons-logos/react'
import vueIcon from '@iconify/icons-logos/vue'
import styles from './Polaroid.module.scss'

type Props = HTMLProps<HTMLElement> & {
  imagePath: string
}

const Polaroid = ({ imagePath, style }: Props) => (
  <div className="polaroid" style={style}>
      <span style={{ cursor: 'auto' }}>
          <img
            height="250px"
            src={imagePath}
            alt="Avator placeholder"
          />
          <Icon
            className={styles.icon}
            icon={angularIcon}
          />
          <Icon
            className={styles.icon}
            icon={reactIcon}
          />
          <Icon
            className={styles.icon}
            icon={vueIcon}
          />
      </span>
  </div>
)

export default Polaroid