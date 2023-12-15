import { TypeAnimation } from 'react-type-animation';

import React, { useEffect } from 'react';
import { IoIosSend } from 'react-icons/io';

const HeroInfo = () => {


    return (
        <div>
            <h1 className="text-4xl font-bold py-5 ">Hi, I am Md. Ashikur Zaman</h1>

            <div className="flex items-end gap-2">
                <h3 className="text-2xl font-semibold">And I am</h3>

                <h3 className="change_text flex gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text shadow">
                    <TypeAnimation
                        sequence={[
                            'Junior',
                            500,
                            'Junior Front-end', //  Continuing previous Text
                            500,
                            'Junior Front-end Web',
                            500,
                            'Junior Front-end Web Developer',
                            500,
                            '',
                            500,
                        ]}
                        style={{ fontSize: '2em' }}
                        repeat={Infinity}
                    />
                </h3>
            </div>



            <div>
                <p className="text-justify py-5">
                    Welcome to my corner of the web! I am a highly motivated and detail-oriented Junior Front End Developer
                    with a deep passion for creating visually stunning and user-friendly websites. My journey into the world of
                    web development began with a love for design and a commitment to turning ideas into seamless, interactive
                    experiences.
                </p>

                <button className="flex mx-auto btn btn-md text-xl">
                    Say Hello <span><IoIosSend /></span>
                </button>
            </div>
        </div>
    );
};

export default HeroInfo;
