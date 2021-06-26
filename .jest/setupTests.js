import React from 'react'

import { configureAxe, toHaveNoViolations } from 'jest-axe'
import { configure, shallow, render, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

expect.extend(toHaveNoViolations) // extend jest expect

const axe = configureAxe({
  rules: {
    region: { enabled: false }, // disable landmark rule for atomic components
  },
})

configure({ adapter: new Adapter() }) // add enzyme adapter for react 17 to

global.React = React
global.shallow = shallow
global.render = render
global.mount = mount
global.axe = axe
