import React from 'react';
import { Link } from 'react-router-dom';
//import style dari breadcrumb style
import { Wrapper, Content } from '../BreadCrumb/BreadCrumb.style';

const BreadCrumb = ({ movieTitle }) => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{movieTitle}</span>
        </Content>
    </Wrapper>
)

export default BreadCrumb;