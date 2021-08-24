import React from 'react';
//Import style dari style HeroImage
import { Wrapper, Content, Text } from '../HeroImage/HeroImage.style'

const HeroImage = ({ image, title, text}) => (
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
)

export default HeroImage;