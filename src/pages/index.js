import React from 'react'

import '../tailwind.css'

import Headline from '../components/atoms/Headline/Headline'

const Index = () => {
  return (
    <Headline tag="h1" className="text-center">
      Hello World
    </Headline>
  )
}

Index.propTypes = {}

Index.defaultProps = {}

export default Index
