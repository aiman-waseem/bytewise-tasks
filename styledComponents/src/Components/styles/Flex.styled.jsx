import styled from 'styled-components';

 export const Flex= styled.div`
  display: flex;
  align-items: center;

  /* any direct div or direct ul will set flex to 1 (column direction)   */

  & > div,
  & > ul {
    flex:1
  }

`
