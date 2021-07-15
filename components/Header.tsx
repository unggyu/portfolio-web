import React, { useState } from 'react'
import Typical from 'react-typical'
import Switch from 'react-switch'
import { HeaderProps } from 'portfolio-web'
import { useWindowSize } from '../utils/hooks'

const Header = ({ shared_data: sharedData }: HeaderProps) => {
  const [checked, setChecked] = useState(false)
  const windowSize = useWindowSize()

  const setTheme = () => {
    const dataThemeAttribute = 'data-theme'
    const body = document.body
    const newTheme = body.getAttribute(dataThemeAttribute) === 'dark' ? 'light' : 'dark'
    body.setAttribute(dataThemeAttribute, newTheme)
  }

  const onThemeSwitchChange = (checked: boolean) => {
    setChecked(checked)
    setTheme()
  }

  const HeaderTitleTypeAnimation = React.memo(() => (
    <Typical
      className="title-styles"
      steps={sharedData.titles.map(x => [x.toUpperCase(), 1500]).flat()}
      loop={50}
    />
  ), (props, prevProp) => true)

  return (
    <header id="home" style={{ height: windowSize.height, display: 'block'}}>
      <div className="row aligner" style={{ height: '100%' }}>
        <div className="col-md-12">
          <div>
            <span
              className="iconify header-icon"
              data-icon="la:laptop-code"
              data-inline="false"
            />
            <br />
            <h1 className="mb-0">
              <Typical steps={[sharedData.name]} wrapper="p" />
            </h1>
            <div className="title-container">
              <HeaderTitleTypeAnimation />
            </div>
            <Switch
              id="icon-switch"
              checked={checked}
              onChange={onThemeSwitchChange}
              offColor="#baaa80"
              onColor="#353535"
              className="react-switch mx-auto"
              width={90}
              height={40}
              uncheckedIcon={
                <span
                  className="iconify"
                  data-icon="twemoji:owl"
                  data-inline="false"
                  style={{
                    display: 'block',
                    height: '100%',
                    fontSize: 25,
                    textAlign: 'end',
                    marginLeft: '20px',
                    color: '#353239',
                  }}
                />
              }
              checkedIcon={
                <span
                  className="iconify"
                  data-icon="noto-v1:sun-with-face"
                  data-inline="false"
                  style={{
                    display: 'block',
                    height: '100%',
                    fontSize: 25,
                    textAlign: 'end',
                    marginLeft: '10px',
                    color: '#353239',
                  }}
                />
              }
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;