import React from 'react'
import { Link } from 'react-router'
import typography from 'utils/typography'
import Helmet from 'react-helmet'
const rhythm = typography.rhythm
const scale = typography.scale
import includes from 'lodash/includes'
import 'typeface-alegreya'
import 'typeface-alegreya-sans'
import 'css/prism-coy.css'

class Wrapper extends React.Component {
  render () {
    let header
    // Check if the location is either the front page or a tags page.
    // If so, use a big header, otherwise use a smaller one.
    if (includes(['/', '/tags/'], this.props.location.pathname) ||
        includes(this.props.location.pathname, '/tags/')
       ) {
      header = (
        <Link
          style={{
            textDecoration: 'none',
            boxShadow: 'none',
            color: 'inherit',
          }}
          to="/"
        >
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
            }}
          >
            Bricolage
          </h1>
        </Link>
      )
    } else {
      header = (
        <Link
          style={{
            textDecoration: 'none',
            boxShadow: 'none',
            color: 'inherit',
          }}
          to="/"
        >
          <h3>Bricolage</h3>
        </Link>
      )
    }
    return (
      <div
        style={{
          padding: `${rhythm(1.5)} ${rhythm(3/4)}`,
          maxWidth: 750,
          margin: `0 auto`,
        }}
      >
        <Helmet
          title="Bricolage"
          titleTemplate="Bricolage | %s"
        />
        <div>
          {header}
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Wrapper
