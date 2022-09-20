import * as React from 'react';

const AboutPage = () => {
    return (
      <main className="text-slate-900 bg-slate-50 dark:text-slate-50 dark:bg-slate-900">
        <section className="h-screen grid content-center place-items-center">
          <h1 className='text-5xl'>About Me</h1>
          <p className='font-light'>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </section>
      </main>
    )
  }
  
  export const Head = () => <title>About Me</title>
  // Step 3: Export your component
  export default AboutPage