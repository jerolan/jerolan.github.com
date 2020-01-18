import './index.css';

import React from 'react';
import Helmet from 'react-helmet';

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="『夢工場ドキドキパニック』"
      meta={[
        { name: 'author', content: 'Jerome Olvera' },
        { name: 'description', content: 'Personal frontpage' },
        {
          name: 'google-site-verification',
          content: 'aqbgnLBvNM6AzvR1Xk5nVw0wWW6sxgeGgOyBlZIyCOc',
        },
      ]}
    />

    <main>{children}</main>
  </div>
);

export default Layout;
