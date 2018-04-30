import './index.css'
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const Layout = ({ children, data }) => (
  <main>
    <Helmet
      title='『夢工場ドキドキパニック』'
      meta={[
        { name: 'og:image', content: 'https://cdn.shopify.com/s/files/1/1065/1408/products/solid_black_backdrop_b52330dc-6531-42e2-bff3-28f7d6dff06c_large.png?v=1484054004' }
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
