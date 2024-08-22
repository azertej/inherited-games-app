'use client';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const NavbarImage = () => {
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className=' w-[100px] h-[100px] lg:h-[100px] lg:w-[100px]  '>
            <Link activeClass="active" to="hero" spy={true} smooth={true} offset={-50} duration={1200}>
                <div className='relative h-full'>
                    <Image
                        src='/logo.png'
                        id='FirstImage'
                        alt='logoImage'
                        className={`cursor-pointer absolute top-0 left-0 transition-all duration-1000 ${isScrolled ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-full'}`}
                        width={100}
                        height={100}
                        onClick={() => router.push('/')}
                    />
                    <div className='relative w-[120px] h-[150px] xl:h-[300px] xl:w-[250px] cursor-pointer' onClick={() => router.push('/')}>
                        <Image
                            src='/logo.png'
                            id='SecondNavImage'
                            alt='logoImage'
                            className={` absolute top-0 right-20 transition-all duration-1000 ${isScrolled ? 'opacity-0 transform -translate-y-full' : 'opacity-100 transform translate-y-0'}`}
                            fill
                            
                        />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default NavbarImage;