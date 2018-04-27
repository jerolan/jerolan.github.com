import './index.css'
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const Layout = ({ children, data }) => (
  <main>
    <Helmet
      title='Jerome Olvera'
      meta={[
        { name: 'description', content: 'Personal frontpage' }
      ]}
    />

    <div>
      {children()}
    </div>
  </main>
)

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout
