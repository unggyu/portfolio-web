import React, { Component } from 'react'
import Typical from 'react-typical'
import Switch from 'react-switch'
import { HeaderProps, HeaderState, Theme } from 'portfolio-web'

class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props)

    this.state = {
      theme: props.theme,
    }

    this.checkedToTheme.bind(this)
    this.themeToChecked.bind(this)
    this.onThemeChange.bind(this)
    this.onThemeSwitchChange.bind(this)
  }

  checkedToTheme(checked: boolean): Theme {
    return checked ? 'dark' : 'light'
  }

  themeToChecked(theme: Theme): boolean {
    return theme === 'dark'
  }

  onThemeChange() {
    if (this.props.onThemeChanged) {
      this.props.onThemeChanged(this.state.theme)
    }
  }

  onThemeSwitchChange(checked: boolean) {
    const theme = this.checkedToTheme(checked)
    this.setState({ theme }, this.onThemeChange)
  }

  render() {
    const HeaderTitleTypeAnimation = React.memo(
      () => (
        <Typical
          className="title-styles"
          steps={shared_data.titles.map((x) => [x.toUpperCase(), 1500]).flat()}
          loop={50}
        />
      ),
      (props, prevProp) => true
    )

    const { shared_data, screenHeight } = this.props
    let { theme } = this.state
    if (this.props.theme !== theme) {
      theme = this.props.theme
    }
    return (
      <header
        id="home"
        data-theme={theme}
        style={{ height: screenHeight, display: 'block' }}
      >
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
                <Typical steps={[shared_data.name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
              <Switch
                id="icon-switch"
                checked={this.themeToChecked(theme)}
                onChange={this.onThemeSwitchChange.bind(this)}
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
}

export default Header
