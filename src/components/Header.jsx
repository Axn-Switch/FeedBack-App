import React from 'react'
import PropTypes from 'prop-types'

function Header(props, {bgColor, textColor}) {
  const headerStyles = {
    backgroundColor: props.bgColor,
    color: props.textColor,
  }

  //an alternative way to do this above would be to put props in curly braces without the prop value

  return (
    <header style={headerStyles}>
        <div className='container'>
            <h1>{props.text}</h1>
        </div>
    </header>
  )
}

//setting default props
Header.defaultProps = {
  text: 'FeedBack UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
}

//Defininf proptypes
Header.propTypes = {
  text: PropTypes.string,
}

export default Header