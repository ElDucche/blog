import * as React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
    return (
      <Layout pageTitle="About Me">
        <p className='w-96 m-auto'>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      </Layout>
    )
  }
  
  export const Head = () => <title>About Me</title>
  // Step 3: Export your component
  export default AboutPage