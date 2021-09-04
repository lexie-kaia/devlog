import React from 'react';
// components
import Layout from '../components/layout/LayoutIndex';
import NotFoundRenderer from '../components/pages/notfound/NotFoundIndex';

function NotFound() {
  return (
    <Layout layoutType={'fullPage'}>
      <NotFoundRenderer />
    </Layout>
  );
}

export default NotFound;
