import React from 'react';
// import style dari thumb style
import { Image } from './Thumb.style';

const Thumb = ({ image, movieId, clickable}) => (
    <div>
        <Image src={image} alt='movie-thumb' />
    </div>
);

export default Thumb;