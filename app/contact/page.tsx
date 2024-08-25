'use client'
import ContactForm from '@/components/ContactForm'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
// @ts-ignore
import { Fade } from "react-awesome-reveal"
import { useToast } from '@/components/ui/use-toast'

const Page = () => {
    const externeURL = 'https://inherited-games-bo.vercel.app'
    const [infos, setInfos] = useState([])
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const url = `${externeURL}/api/Career-events/get-events`
                console.log('Fetching URL:', url)
                const response = await fetch(url,{
                    redirect:'follow'
                })
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json()
                setInfos(data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchEvents()
    }, [externeURL])


    const router = useRouter()
    const { toast } = useToast()

    const [contactInfos, setContactInfos] = useState({
        userName: '',
        email: '',
        description: ''
    })
    const postContact = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await fetch('/api/contactAPI/create-contact', {
                method: 'POST',
                body: JSON.stringify({
                    userName: contactInfos.userName,
                    email: contactInfos.email,
                    description: contactInfos.description
                })
            })
            if (response.ok) {
                toast({
                    variant: 'default',
                    description: 'Infos Sended Succesfully'
                })
                setContactInfos({
                    userName: '',
                    email: '',
                    description: ''
                });
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className='flex justify-center items-center h-auto lg:h-screen bg-opacity-80 ' style={{ backgroundImage: `url('/backround.jpg')`, backgroundSize: '100% 100%' }}>
            <div className='mx-auto flex flex-col mt-20 bg-gray-100 bg-opacity-40  p-0 lg:p-10 rounded-xl'>
                <div className='grid md:grid-cols-2 mt-10 lg:mt-0 px-10 md:px-0 gap-x-10'>
                    {infos.map((info: any, index) => (
                        <div key={index} className='flex flex-col justify-center max-w-[600px]'>
                            <Fade direction='left' delay={400} cascade damping={1e-1} triggerOnce={true} >
                                <div className='flex items-center gap-x-4 text-lg mb-3'>
                                    <span className='w-8 h-[2px] bg-blue-600 font-semibold'></span>
                                    {info.title}
                                </div>
                            </Fade>
                            <Fade direction='left' delay={600} cascade damping={1e-1} triggerOnce={true} >
                                <span className='text-5xl font-bold'>{info.shortDescription} </span>
                            </Fade>
                            <Fade direction='left' delay={800} cascade damping={1e-1} triggerOnce={true} >
                                <p className=' maxw-[300px] lg:max-w-[500px] mt-3 my-2 md:my-2 font-semibold'>{info.description}</p>
                            </Fade>
                        </div>
                    ))}
                    <div>
                        <Fade direction='right' delay={800} cascade damping={1e-1} triggerOnce={true} >
                            <ContactForm infos={contactInfos} setInfos={setContactInfos} handleSubmit={postContact} />
                        </Fade>
                    </div>
                </div>
                <div className='flex justify-center  my-10 md:my-0 md:mt-16 '>
                    <div className='flex flex-col gap-y-2 items-center'>
                        <Fade direction='up' delay={1000} cascade damping={1e-1} triggerOnce={true} >
                            <span className=' text-xl md:text-3xl font-bold '>JOIN OUR COMMUNITY</span>
                            <div className='flex gap-4 items-center justify-center mr-5 md:mr-0 '>
                                <Image onClick={() => window.open('https://www.facebook.com/InheritedGamesStudio', '_blink')} src='/facebook.png' alt='facebook' className='cursor-pointer' width={50} height={50} />
                                <Image onClick={() => window.open('https://www.linkedin.com/company/inherited-games-studio/', '_blink')} src='/linkedin.png' alt='linkedin' className='cursor-pointer' width={50} height={50} />
                                <Image onClick={() => window.open('https://www.instagram.com/inheritedgames', '_blink')} src='/instagram.png' alt='instagram' className='cursor-pointer' width={80} height={80} />
                                <Image onClick={() => window.open('https://www.linkedin.com/company/inherited-games-studio/', '_blink')} src='/discord.png' alt='discord' className='cursor-pointer' width={70} height={70} />
                            </div>
                        </Fade>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page