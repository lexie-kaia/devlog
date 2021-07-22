import React, { useRef, useEffect } from 'react';

function Commentwidget() {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current == null) return;
    const utterances = document.createElement('script');

    const attributes = {
      src: 'https://utteranc.es/client.js',
      repo: 'lexie-kaia/lexie-kaia-github.io',
      'issue-term': 'pathname',
      label: 'Comment',
      theme: 'github-light',
      crossorigin: 'anonymous',
      async: 'true',
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    divRef.current.appendChild(utterances);
  }, []);
  return <div ref={divRef} />;
}

export default Commentwidget;
