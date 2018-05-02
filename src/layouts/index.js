import './index.css'
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const Layout = ({ children, data }) => (
  <main>
    <Helmet
      title='『夢工場ドキドキパニック』'
      meta={[
        { name: 'description', content: 'Personal frontpage' },
        { name: 'google-site-verification', content: 'aqbgnLBvNM6AzvR1Xk5nVw0wWW6sxgeGgOyBlZIyCOc' }
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
