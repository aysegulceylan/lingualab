import Link from "next/link";
import { 
  UserCircleIcon, 
  ClockIcon, 
  BookmarkIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Üst Profil Kartı */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-8">
        <div className="bg-indigo-600 h-32"></div> {/* Arka plan şeridi */}
        <div className="px-8 pb-8">
          <div className="relative flex items-end -mt-12 mb-6">
            <div className="p-1.5 bg-white rounded-full">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 border-4 border-white shadow-sm">
                <UserCircleIcon className="w-20 h-20" />
              </div>
            </div>
            <div className="ml-6 mb-2">
              {/* DÜZELTİLEN KISIM 👇 */}
              <h1 className="text-2xl font-bold text-gray-900">Hoş Geldin 👋</h1>
              <p className="text-gray-500 text-sm font-medium">LinguaLab Üyesi</p>
            </div>
          </div>

          {/* İstatistikler */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-gray-100 pt-6">
            <div className="text-center p-4 bg-gray-50 rounded-2xl">
              <div className="text-2xl font-bold text-indigo-600">12</div>
              <div className="text-xs text-gray-500 font-medium uppercase mt-1">Çözülen Test</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-2xl">
              <div className="text-2xl font-bold text-green-600">%85</div>
              <div className="text-xs text-gray-500 font-medium uppercase mt-1">Ortalama Başarı</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-2xl">
              <div className="text-2xl font-bold text-amber-600">450</div>
              <div className="text-xs text-gray-500 font-medium uppercase mt-1">Öğrenilen Kelime</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-2xl">
              <div className="text-2xl font-bold text-purple-600">B2+</div>
              <div className="text-xs text-gray-500 font-medium uppercase mt-1">Seviye</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* SOL KOLON: Son Aktiviteler */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <ClockIcon className="w-5 h-5 text-gray-400" />
              Son Çalışmaların
            </h2>
            <div className="space-y-4">
              {/* Aktivite 1 */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold">
                    Tp
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Tıbbi Çeviri: Vaka Raporu</h4>
                    <p className="text-xs text-gray-500">2 saat önce tamamlandı</p>
                  </div>
                </div>
                <span className="text-green-600 font-bold text-sm">Başarılı</span>
              </div>

              {/* Aktivite 2 */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center font-bold">
                    YDT
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">YDT Deneme 1 (Paragraf)</h4>
                    <p className="text-xs text-gray-500">Dün tamamlandı</p>
                  </div>
                </div>
                <span className="text-indigo-600 font-bold text-sm">8/10 Doğru</span>
              </div>
              
              {/* Aktivite 3 */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center font-bold">
                    Rk
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Reklam Çevirisi: Sloganlar</h4>
                    <p className="text-xs text-gray-500">3 gün önce</p>
                  </div>
                </div>
                <span className="text-gray-500 font-bold text-sm">Yarım Kaldı</span>
              </div>

            </div>
          </div>
        </div>

        {/* SAĞ KOLON: Hızlı Menü */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-2xl shadow-lg text-white">
            <h3 className="text-xl font-bold mb-2">Hedefine Az Kaldı! 🎯</h3>
            <p className="text-indigo-100 text-sm mb-6">
              Haftalık hedefini tamamlamak için 2 test daha çözmelisin.
            </p>
            <Link href="/practice/ydt">
               <button className="w-full py-3 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition flex items-center justify-center gap-2">
                 Test Çöz <ArrowRightIcon className="w-4 h-4" />
               </button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
             <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <BookmarkIcon className="w-5 h-5 text-amber-500" />
                Kaydedilenler
             </h3>
             <ul className="space-y-3">
               <li className="text-sm text-gray-600 border-b border-gray-50 pb-2">Ambiguous (Sıfat)</li>
               <li className="text-sm text-gray-600 border-b border-gray-50 pb-2">Implement (Fiil)</li>
               <li className="text-sm text-gray-600 border-b border-gray-50 pb-2">Sufficient (Sıfat)</li>
             </ul>
             <button className="w-full mt-4 text-indigo-600 text-sm font-bold hover:underline">Tümünü Gör →</button>
          </div>
        </div>

      </div>
    </div>
  );
}