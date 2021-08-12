import React from 'react';
import { CardText, List } from 'react-bootstrap-icons';

type Props = {
  contentType: 'default' | 'compact';
};

function ListStyleItemContent({ contentType }: Props) {
  return (
    <>
      {contentType === 'default' && (
        <>
          <CardText className={'item-icon'} />
          <span className="item-text">default view</span>
        </>
      )}
      {contentType === 'compact' && (
        <>
          <List className="item-icon" />
          <span className="item-text">compact view</span>
        </>
      )}
    </>
  );
}

export default ListStyleItemContent;
