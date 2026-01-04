import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center">
      
      {/* 1. HERO ALANI (Karşılama) */}
      <section className="w-full max-w-6xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Sol Taraf: Yazılar */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Dil Öğrenmenin <br />
            <span className="text-pink-500">En Tatlı Yolu 🍬</span>
          </h1>
          <p className="text-lg text-gray-700 md:w-3/4">
            KelimeKuşu ile yeni kelimeler öğren, toplulukla yarış ve dil becerilerini oyunlaştırarak geliştir. Sıkıcı ders kitaplarına elveda de!
          </p>
          
          <div className="flex gap-4 justify-center md:justify-start">
            <Link href="/register">
              <button className="px-8 py-4 bg-pink-500 text-white font-bold rounded-full text-lg shadow-lg hover:bg-pink-600 hover:scale-105 transition transform">
                Hemen Başla 🚀
              </button>
            </Link>
            <Link href="/practice">
              <button className="px-8 py-4 bg-white text-pink-500 border-2 border-pink-500 font-bold rounded-full text-lg hover:bg-pink-50 transition">
                Örnek Dene
              </button>
            </Link>
          </div>
        </div>

        {/* Sağ Taraf: Görsel */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] bg-pink-100 rounded-full flex items-center justify-center animate-pulse-slow">
            <span className="text-[150px]">🐦</span>
          </div>
        </div>
      </section>

      {/* 2. ÖZELLİKLER ALANI (Neden Biz?) */}
      <section className="w-full bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Ana Başlık Rengi Koyulaştırıldı 👇 */}
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Neden <span className="text-pink-500">KelimeKuşu?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Kart 1 */}
            <div className="p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition text-center group border border-gray-100">
              <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300">🎯</div>
              {/* Başlık Rengi Koyulaştırıldı (text-gray-900) 👇 */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hedefe Yönelik</h3>
              <p className="text-gray-600">Sadece ihtiyacın olan kelimeleri öğren, gereksiz detaylarla vakit kaybetme.</p>
            </div>

            {/* Kart 2 */}
            <div className="p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition text-center group border border-gray-100">
              <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300">🏆</div>
              {/* Başlık Rengi Koyulaştırıldı 👇 */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">Liderlik Tablosu</h3>
              <p className="text-gray-600">Arkadaşlarınla yarış, puanları topla ve haftanın şampiyonu sen ol!</p>
            </div>

            {/* Kart 3 */}
            <div className="p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition text-center group border border-gray-100">
              <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300">💬</div>
              {/* Başlık Rengi Koyulaştırıldı 👇 */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">Canlı Topluluk</h3>
              <p className="text-gray-600">Diğer öğrencilerle sohbet et, çeviri sorularını sor ve sosyalleş.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}