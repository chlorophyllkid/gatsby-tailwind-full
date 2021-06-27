import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Headline = ({ tag, className, children }) => {
  const HeadlineTag = `${tag}`

  const headlineStyles = classNames('font-bold', {
    'text-9xl': tag === 'h1',
    'text-8xl': tag === 'h2',
    'text-7xl': tag === 'h3',
  })

  return (
    <HeadlineTag className={`${headlineStyles} ${className}`}>
      {children}
    </HeadlineTag>
  )
}

Headline.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

Headline.defaultProps = {
  className: '',
  tag: 'h2',
}

export default Headline
