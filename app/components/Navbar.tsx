"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  HomeIcon, 
  BeakerIcon, 
  UserCircleIcon, 
  GlobeAltIcon 
} from '@heroicons/react/24/outline';

export default function Navbar() {
  const pathname = usePathname(); 

  // Aktif sayfanın linkini renkli yapma fonksiyonu
  const isActive = (path: string) => pathname === path ? "text-indigo-600 bg-indigo-50" : "text-gray-600 hover:text-indigo-600 hover:bg-gray-50";

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm backdrop-blur-md bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* LOGO KISMI */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-indigo-600 text-white p-2 rounded-xl shadow-md group-hover:scale-110 transition duration-300">
              <GlobeAltIcon className="w-6 h-6" />
            </div>
            <span className="text-xl font-extrabold text-gray-800 tracking-tight group-hover:text-indigo-600 transition">
              LinguaLab
            </span>
          </Link>

          {/* MENÜ LİNKLERİ */}
          <div className="flex space-x-2 md:space-x-4">
            
            <Link href="/" className={`flex items-center gap-2 px-4 py-2 rounded-lg transition font-medium ${isActive('/')}`}>
              <HomeIcon className="w-5 h-5" />
              <span className="hidden md:inline">Anasayfa</span>
            </Link>

            <Link href="/practice" className={`flex items-center gap-2 px-4 py-2 rounded-lg transition font-medium ${isActive('/practice')}`}>
              <BeakerIcon className="w-5 h-5" />
              <span className="hidden md:inline">Atölye</span>
            </Link>

            <Link href="/profile" className={`flex items-center gap-2 px-4 py-2 rounded-lg transition font-medium ${isActive('/profile')}`}>
              <UserCircleIcon className="w-5 h-5" />
              <span className="hidden md:inline">Profil</span>
            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
}