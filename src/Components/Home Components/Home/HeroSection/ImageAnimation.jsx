import React from 'react';
import img from '../../../../assets/images/01.png';
import './animation.css';

const ImageAnimation = () => {



    return (
        <div>
            <div>
                <img className='w-[150px] h-[150px] md:w-[300px] md:h-[300px] bg-cover rounded-full ' src={img} alt="my image" />
            </div>
        </div>
    );
};

export default ImageAnimation;