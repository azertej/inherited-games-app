'use client'

import React from 'react';
import { Input } from './ui/input';
import { UserCheck, Building, MessageSquare, ArrowRight } from 'lucide-react';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

const ContactForm = ({ infos, setInfos, handleSubmit }: any) => {

    return (
        <form className='flex flex-col gap-y-3' onSubmit={handleSubmit}>
            <div className='relative flex items-center'>
                <Input type='text' placeholder='Full Name' value={infos.userName}
                    onChange={(e) => setInfos({ ...infos, userName: e.target.value })} />
                <UserCheck className='absolute right-5' />
            </div>
            <div className='relative flex items-center'>
                <Input type='email' placeholder='Email' value={infos.email}
                    onChange={(e) => setInfos({ ...infos, email: e.target.value })} />
                <Building className='absolute right-5' />
            </div>
            <div className='relative flex items-center'>
                <Textarea placeholder='Type your message here...' value={infos.description}
                    onChange={(e) => setInfos({ ...infos, description: e.target.value })} />
                <MessageSquare className='absolute right-5 top-2' />
            </div>
            <Button type='submit' className='flex items-center gap-x-2 max-w-[200px] mx-auto'>
                Lets Talk
                <ArrowRight />
            </Button>
        </form>
    );
};

export default ContactForm;