import Link from "next/link";
import { 
  BeakerIcon, 
  AcademicCapIcon, 
  ArrowRightIcon, 
  SparklesIcon 
} from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* --- HERO SECTION (Giriş Vitrini) --- */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-50 to-white pt-14 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            
            {/* Şirinlik Detayı: Rozet */}
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 bg-white shadow-sm animate-fade-in-up">
                <span className="font-semibold text-indigo-600">LinguaLab v1.0</span> Yayında! 🚀
              </div>
            </div>

            {/* Ciddi & Güçlü Başlık */}
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6">
              Profesyonel Çeviri <br />
              <span className="text-indigo-600">Pratik Platformu</span>
            </h1>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              Sıkıcı ders kitaplarını unut. Tıbbi vaka raporlarından hukuki sözleşmelere, reklam metinlerinden YDT denemelerine kadar gerçek hayat senaryolarıyla dil becerilerini geliştir.
            </p>

            {/* Aksiyon Butonları */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/practice" className="rounded-xl bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all hover:scale-105 flex items-center gap-2">
                Hemen Başla <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link href="/profile" className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition">
                Profilime Git <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* --- ÖZELLİKLER (Kartlar) --- */}
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Atölyeler & Sınavlar</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hangi alanda uzmanlaşmak istersin?
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
              
              {/* KART 1: ESP (Alan Çevirisi) */}
              <div className="flex flex-col items-start bg-blue-50/50 p-8 rounded-3xl border border-blue-100 hover:shadow-lg transition">
                <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-900/5 mb-6">
                  <BeakerIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Teknik Çeviri Atölyesi</h3>
                <p className="mt-4 text-base leading-7 text-gray-600 flex-auto">
                  Tıp, Hukuk, Ekonomi ve Edebiyat alanlarında gerçek metinler üzerinde çalış. Terim hazineni ve çeviri yeteneğini profesyonel seviyeye taşı.
                </p>
              </div>

              {/* KART 2: YDT/Sınav */}
              <div className="flex flex-col items-start bg-green-50/50 p-8 rounded-3xl border border-green-100 hover:shadow-lg transition">
                <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-900/5 mb-6">
                  <AcademicCapIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Sınav Hazırlık Merkezi</h3>
                <p className="mt-4 text-base leading-7 text-gray-600 flex-auto">
                  YDT ve YÖKDİL formatına uygun, ÖSYM tarzı sorular. Paragraf, kelime ve cümle tamamlama testleriyle netlerini artır.
                </p>
              </div>

              {/* KART 3: Yaratıcı/Reklam */}
              <div className="flex flex-col items-start bg-purple-50/50 p-8 rounded-3xl border border-purple-100 hover:shadow-lg transition">
                <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-900/5 mb-6">
                  <SparklesIcon className="h-6 w-6 text-purple-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Yaratıcı Çeviri</h3>
                <p className="mt-4 text-base leading-7 text-gray-600 flex-auto">
                  Reklam sloganları ve pazarlama metinleri üzerinde çalışarak dilin yaratıcı yönünü keşfet. Yerelleştirme becerisi kazan.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}