import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import React from 'react'

import * as icons from '@fortawesome/free-brands-svg-icons'

import './style.scss'

const iconNames = icons.constructor.keys(icons)

iconNames.forEach(iconName => {
  const currentIcon = icons[iconName]
  if (currentIcon.icon) {
    library.add(currentIcon)
  }
})

const Icon = ({ name }) => (
  <div className="icon" title={name}>
    <FontAwesomeIcon icon={['fab', name]} />
  </div>
)

export default Icon
