import reactIcon from '@iconify/icons-logos/react'
import angularIcon from '@iconify/icons-logos/angular-icon'
import vueIcon from '@iconify/icons-logos/vue'

const getLogoIcon = (name: string): any => {
  switch (name) {
    case 'react': return reactIcon
    case 'angular': return angularIcon
    case 'vue': return vueIcon
  }
}

export default getLogoIcon