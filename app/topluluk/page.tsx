export default function ToplulukPage() {
  return (
    <div className="min-h-screen bg-pink-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* SOL MENÜ: Kategoriler */}
        <div className="hidden md:block col-span-1">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-pink-100 sticky top-24">
            <h3 className="font-bold text-gray-700 mb-4">Konular</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2 cursor-pointer text-pink-500 font-bold bg-pink-50 p-2 rounded-lg">
                🌍 Genel Sohbet
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition">
                🩺 Tıbbi Terimler
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition">
                🎓 YKS / YDT Taktikleri
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition">
                ⚖️ Hukuk Köşesi
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition">
                🆘 Acil Yardım!
              </li>
            </ul>
          </div>
        </div>

        {/* ORTA: Akış (Feed) */}
        <div className="col-span-1 md:col-span-2 space-y-6">
          
          {/* Yeni Gönderi Yazma Kutusu */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-pink-200">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">👩‍🎨</div>
              <input 
                type="text" 
                placeholder="Çevirmenlere bir soru sor..." 
                className="flex-1 bg-gray-50 rounded-full px-6 outline-none focus:ring-2 focus:ring-pink-300 transition"
              />
            </div>
            <div className="flex justify-end mt-3 gap-2">
               <button className="bg-pink-500 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-pink-600 transition">Paylaş</button>
            </div>
          </div>

          {/* Gönderi 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl">👨‍💻</div>
                <div>
                  <h4 className="font-bold text-gray-800">Caner Yılmaz</h4>
                  <p className="text-xs text-gray-400">2 saat önce • Tıbbi Terimler</p>
                </div>
              </div>
              <span className="text-gray-400 cursor-pointer">...</span>
            </div>
            <p className="text-gray-700 mb-4">
              Arkadaşlar "patient adherence" terimini tıbbi metinde nasıl çeviriyorsunuz? "Hasta uyumu" mu yoksa "Hasta sadakati" mi daha doğru?
            </p>
            <div className="flex gap-6 text-gray-500 text-sm font-medium border-t pt-4">
              <span className="cursor-pointer hover:text-pink-500 flex items-center gap-1">💬 12 Yorum</span>
              <span className="cursor-pointer hover:text-pink-500 flex items-center gap-1">❤️ 5 Beğeni</span>
            </div>
          </div>

          {/* Gönderi 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-xl">🦊</div>
                <div>
                  <h4 className="font-bold text-gray-800">Dilara S.</h4>
                  <p className="text-xs text-gray-400">5 saat önce • YKS Taktikleri</p>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              YDT sınavında paragrafları çözerken önce şıkları okumak bana çok zaman kazandırdı. Sizce mantıklı mı? 🤔
            </p>
            <div className="flex gap-6 text-gray-500 text-sm font-medium border-t pt-4">
              <span className="cursor-pointer hover:text-pink-500 flex items-center gap-1">💬 45 Yorum</span>
              <span className="cursor-pointer hover:text-pink-500 flex items-center gap-1">❤️ 128 Beğeni</span>
            </div>
          </div>

        </div>

        {/* SAĞ: Popüler */}
        <div className="hidden md:block col-span-1">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-pink-100 sticky top-24">
            <h3 className="font-bold text-gray-700 mb-4">Haftanın Liderleri 🏆</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🥇</span>
                  <span className="text-sm font-bold text-gray-700">Ahmet K.</span>
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">1200 P</span>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🥈</span>
                  <span className="text-sm font-bold text-gray-700">Elif B.</span>
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">950 P</span>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🥉</span>
                  <span className="text-sm font-bold text-gray-700">Mehmet T.</span>
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">820 P</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}