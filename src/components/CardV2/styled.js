import styled, { css } from 'styled-components'

export const CardV2Wrapper = styled.div`
  background: ${ props => props.background ? props.background : '#e3a617' };
  h5 {
    color: #fff2a8;
  }

  p {
    color: #fff2a8;
  }

  ${props =>
    props.primary &&
    css`
      background: #8a4baf;

      h5 {
        color: #f1defa;
      }

      p {
        color: #f1defa;
      }
    `
  };
`