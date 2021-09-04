import React, { useRef, useEffect } from 'react';
import styled from '@emotion/styled';

export default function CommentWidgetRenderer() {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current == null) return;

    const utterances = document.createElement('script');

    const attributes = {
      src: 'https://utteranc.es/client.js',
      repo: 'lexie-kaia/lexie-kaia.github.io',
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

  return <CommentWidget ref={divRef} />;
}

const CommentWidget = styled.div`
  .utterances {
    max-width: 100% !important;
  }
`;
