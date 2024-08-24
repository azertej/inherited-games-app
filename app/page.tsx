'use client'
import React, { useEffect, useState } from 'react'
import NewsSection from '@/components/layout/NewsSection';
import TeamSection from '@/components/layout/TeamSection';
import GamesSection from '@/components/layout/GamesSection';
import Hero from '@/components/layout/Hero';


export default function Home() {
  
  const externeURL = process.env.NEXT_PUBLIC_REMOTE_API_URL || 'https://inherited-games-bo.vercel.app/'
  const [games, setGames] = useState([])
  const [infos, setInfos] = useState([])
  const [teams, setTeams] = useState([])
  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`${externeURL}/api/games/get-games`)
      const data = await response.json()
      setGames(data)
    }
    fetchPosts()
    const fetchInfos = async () => {
      const response = await fetch(`${externeURL}/api/landingPage/get-heroSection-info`)
      const data = await response.json()
      setInfos(data)
    }
    fetchInfos()
    const fetchTeam = async () => {
      const response = await fetch(`${externeURL}/api/team/get-teams`)
      const data = await response.json()
      setTeams(data)
    }
    fetchTeam()
    const getNews = async () => {
      const response = await fetch(`${externeURL}/api/news/get-news`)
      const data = await response.json()
      setNews(data)
    }
    getNews()
  }, [externeURL])

  return (
    <div className='flex flex-col h-auto bg-cover bg-center ' style={{ backgroundImage: `url('/backround.jpg')`, backgroundSize: '100% 100%' }}  >
      <Hero infos={infos} />
      <TeamSection teams={teams} />
      <GamesSection games={games} />
      <NewsSection news={news} />
    </div>
  );
}
