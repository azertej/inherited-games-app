'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Gamepad2 } from 'lucide-react'
// @ts-ignore
import { Link } from 'react-scroll'
import { TransitionLinks } from '@/lib/TransitionLinks'
import { cn } from '@/lib/utils'
import { usePathname } from '@/node_modules/next/navigation'


interface openItemsProps {
  open: Boolean,
  setOpen: any
}

const links = [
  {
    linkUrl: '/careers',
    linkTitle: 'CAREERS'
  },
  {
    linkUrl: '/about',
    linkTitle: 'ABOUT'
  },
  {
    linkUrl: '/contact',
    linkTitle: 'CONTACT'
  },
]


const NavbarItems = ({ open, setOpen }: openItemsProps) => {
  const itemClassName = 'font-bold text-white text-md lg:text-xl hover:border-t-[1px]  hover:border-b-[1px] border-solid p-4 hover:border-blue-400 rounded-xl cursor-pointer hover:text-blue-500 group '
  const router = useRouter()
  const pathname = usePathname()

  const [games, setGames] = useState([])
  const externeURL = process.env.NEXT_PUBLIC_REMOTE_API_URL || 'http://localhost:3000'
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`${externeURL}/api/games/get-games`)
      const data = await response.json()
      setGames(data)
    }
    fetchPosts()
  }, [externeURL])
  return (
    <div className='flex flex-col md:flex-row items-center gap-6 z-20 md:max-w-[800px]'>
      <div className={cn('block md:hidden', itemClassName)} onClick={() => setOpen((prev: any) => !prev)}>
        <TransitionLinks href='/' className='group-hover:scale-110 duration-200 ease-in '>HOME</TransitionLinks>
      </div>
      <div className={itemClassName} >
        <div className='group-hover:scale-110 duration-200 ease-in '>
          <Link
            activeClass="active" to="news" spy={true} smooth={true} offset={50} duration={1200}
            onClick={() => setOpen((prev: any) => !prev)}
          > NEWS </Link>
        </div>
      </div>
      <div className={itemClassName}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className='group-hover:scale-110 duration-200 ease-in ove'>GAMES</div>
          </DropdownMenuTrigger>
          <DropdownMenuContent >
            {games.map((game: any) => {
              return (
                <DropdownMenuItem key={game._id}>
                  <TransitionLinks href={`/games/${game._id}` }>
                    <div className='flex' onClick={() => setOpen((prev: any) => !prev)}>
                      <Gamepad2 size={20} /> <span className="ml-2">{game.title}</span>
                    </div>
                  </TransitionLinks>
                </DropdownMenuItem>
              )
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {links.map((link) => {
        return (
          <div key={link.linkTitle} className={itemClassName} onClick={() => setOpen((prev: any) => !prev)}>
            <TransitionLinks href={link.linkUrl} className={`group-hover:scale-110 duration-200 ease-in ${pathname === link.linkUrl && 'border-b-[4px] border-blue-700 '} `}
            >{link.linkTitle}</TransitionLinks>
          </div>
        )
      })}
    </div>
  )
}

export default NavbarItems