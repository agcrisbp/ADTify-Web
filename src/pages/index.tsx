import { Icon } from "@iconify/react";
import { useEffect, useState } from "preact/hooks";
import Link from "next/link";
import GenericMeta from "../components/GenericMeta";
import { TrackList } from "../components/TrackList";
import Spotify from "../components/Spotify";
import type { TopMusicResponseSuccess } from "./api/topMusic";
import Image from "next/future/image";

export default function Projects() {
  const [topMusic, setTopMusic] = useState<TopMusicResponseSuccess | null>(null);

  useEffect(() => {
    fetch(`/api/topMusic`)
      .then(res => res.json())
      .then(info => {
        if (info.error) return;
        setTopMusic(info);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <GenericMeta
        title="ADTify"
        description="Menampilkan daftar putar, lagu, dan artis yang sering saya dengarkan di Spotify."
      />

      <h1 className="heading mb-2 pt-8 bg-gradient-to-r from-green-400 via-white to-white-100 text-transparent bg-clip-text">
        <Image className="h-23 w-23" alt="ADTify Logo"src="/favicon.ico" width={100} height={100} onContextMenu={(e) => e.preventDefault()}/>Tify<Icon className="ml-4 h-12 w-12 text-green-400" icon="mdi:spotify" />
      </h1>
      
      <div className="mb-1"/>
        <Spotify/>
      <hr className="mt-1 mb-6 bg-slate-800 border-none h-0.5" />
      
      <p className="text-lg mb-8">Daftar putar dan lagu yang sering saya dengarkan di <span className="text-green-400"><Link href={`https://open.spotify.com/user/${process.env.SPOTIFY_ID}`}><a target="_blank" rel="noopener noreferrer" className="border-b border-[#fff4] hover:border-white transition">Spotify</a></Link></span>.</p>

      <h2 className="font-bold text-3xl mb-4">Daftar Putar</h2>
        <TrackList playlists={topMusic?.playlists} priority={true} />
        
        <hr className="pb-6 border-none h-0.5" />

      <h2 className="font-bold text-3xl mb-4">Bulan Ini</h2>
      <TrackList tracks={topMusic?.short.items} priority={true} />
      
        <hr className="pb-6 border-none h-0.5" />

      <h2 className="font-bold text-3xl mb-4">6 Bulan Terakhir</h2>
      <TrackList tracks={topMusic?.medium.items} priority={false} />
      
        <hr className="pb-6 border-none h-0.5" />

      <h2 className="font-bold text-3xl mb-4">Sepanjang Waktu</h2>
      <TrackList tracks={topMusic?.long.items} priority={false} />
      
        <hr className="pb-6 border-none h-0.5" />

      <h2 className="font-bold text-3xl mb-4">Artis Teratas</h2>
      <TrackList topArtists={topMusic?.topArtists} priority={false} />
    </>
  );
}