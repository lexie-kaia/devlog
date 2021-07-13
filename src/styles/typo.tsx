import styled from '@emotion/styled';

export const P = styled.p<{ size?: string }>`
  font-size: ${props => {
    switch (props.size) {
      case 'xLarge':
        return '32px';
      case 'large':
        return '22px';
      case 'medium':
        return '18px';
      case 'base':
        return '16px';
      case 'small':
        return '14px';
      case 'xSmall':
        return '13px';
      default:
        return '16px';
    }
  }};

  line-height: ${props => {
    switch (props.size) {
      case 'xLarge':
        return '40px';
      case 'large':
        return '28px';
      case 'medium':
        return '28px';
      case 'base':
        return '20px';
      case 'small':
        return '20px';
      case 'xSmall':
        return '20px';
      default:
        return '20px';
    }
  }};
`;

export const H1 = styled.h1<{ size?: string }>`
  font-size: ${props => {
    switch (props.size) {
      case 'xLarge':
        return '32px';
      case 'large':
        return '22px';
      case 'medium':
        return '18px';
      case 'base':
        return '16px';
      case 'small':
        return '14px';
      case 'xSmall':
        return '13px';
      default:
        return '16px';
    }
  }};

  line-height: ${props => {
    switch (props.size) {
      case 'xLarge':
        return '40px';
      case 'large':
        return '28px';
      case 'medium':
        return '28px';
      case 'base':
        return '20px';
      case 'small':
        return '20px';
      case 'xSmall':
        return '20px';
      default:
        return '20px';
    }
  }};
`;

export const H2 = styled.h2<{ size?: string }>`
  font-size: ${props => {
    switch (props.size) {
      case 'xLarge':
        return '32px';
      case 'large':
        return '22px';
      case 'medium':
        return '18px';
      case 'base':
        return '16px';
      case 'small':
        return '14px';
      case 'xSmall':
        return '13px';
      default:
        return '16px';
    }
  }};

  line-height: ${props => {
    switch (props.size) {
      case 'xLarge':
        return '40px';
      case 'large':
        return '28px';
      case 'medium':
        return '28px';
      case 'base':
        return '20px';
      case 'small':
        return '20px';
      case 'xSmall':
        return '20px';
      default:
        return '20px';
    }
  }};
`;

export const H3 = styled.h3<{ size?: string }>`
  font-size: ${props => {
    switch (props.size) {
      case 'xLarge':
        return '32px';
      case 'large':
        return '22px';
      case 'medium':
        return '18px';
      case 'base':
        return '16px';
      case 'small':
        return '14px';
      case 'xSmall':
        return '13px';
      default:
        return '16px';
    }
  }};

  line-height: ${props => {
    switch (props.size) {
      case 'xLarge':
        return '40px';
      case 'large':
        return '28px';
      case 'medium':
        return '28px';
      case 'base':
        return '20px';
      case 'small':
        return '20px';
      case 'xSmall':
        return '20px';
      default:
        return '20px';
    }
  }};
`;
