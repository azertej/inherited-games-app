import React from 'react'

const Footer = () => {
    return (
        <section className=' w-[80%] md:w-full h-auto py-4 mt-3 flex items-center justify-center mx-auto text-white bg-gray-800 '>
            <div className='flex flex-col gap-y-5 '>
                <div className='flex flex-col gap-y-2 items-center text-center'>
                    <span>Pôle technologique de Sousse, Route de Ceinture Sahloul,</span>
                    <span>Sousse 4054</span>
                    <span>Num: 54 265 833</span>
                </div>
                <div className="text-4 text-center">
                    &copy; Inherited Games 2024 Inc. All rights reserved
                </div>
            </div>
        </section>
    )
}

export default Footer