import React from 'react';
//import styles dari button  style
import { Wrapper } from '../Button/Button.style';

const Button = ({ text, callback}) => (
    <Wrapper type='button' onClick={callback}>
        {text}
    </Wrapper>
);

export default Button;