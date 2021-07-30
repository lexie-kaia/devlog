import React from 'react';
import styled from '@emotion/styled';
import { TocType } from '../../../types';

type Props = {
  toc: TocType;
};

const Ul = styled.ul`
  margin-left: 1rem;
  color: ${props => props.theme.color.textSub};
  font-size: 14px;
  line-height: 28px;
`;

const Li = styled.li``;

function TocContents({ toc }: Props) {
  return (
    <>
      {toc.items && (
        <Ul>
          {toc.items.map((item, index) => {
            return (
              <Li key={index}>
                {item.title}
                {<TocContents toc={item} />}
              </Li>
            );
          })}
        </Ul>
      )}
    </>
  );
}

export default TocContents;

// const TableOfContents = styled.div`
//   padding: 0 1rem;
//   font-size: 16px;
//   line-height: 32px;
//   color: ${props => props.theme.color.textMain};

//   ul {
//     margin-left: 1rem;
//   }
// `;

{
  /* <TableOfContents>
        <Toc toc={tableOfContents}></Toc>
      </TableOfContents> */
}
