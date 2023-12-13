import React from 'react';
import img from '../../../../assets/images/01.png';
import './animation.css';

const ImageAnimation = () => {



    return (
        <div>
            <div>
                <img className=' w-[300px] h-[300px] bg-cover rounded-full ' src={img} alt="my image" />
            </div>
        </div>
    );
};

export default ImageAnimation;