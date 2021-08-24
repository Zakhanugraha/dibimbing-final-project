import React from 'react';
// import style dari grid style
import { Wrapper, Content} from './Grid.style';

const Grid = ({header, children}) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
);

export default Grid;