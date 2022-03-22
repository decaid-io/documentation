import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function Home() {
  return (
    <BrowserOnly>
      {() => window.location.href = '/docs/intro'}
    </BrowserOnly>
  );
}
