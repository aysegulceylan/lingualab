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
            
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 bg-white shadow-sm">
                <span className="font-semibold text-indigo-600">LinguaLab v1.0</span> Yayında! 🚀
              </div>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6">
              Profesyonel Çeviri <br />
              <span className="text-indigo-600">Pratik Platformu</span>
            </h1>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              Sıkıcı ders kitaplarını unut. Tıbbi vaka raporlarından hukuki sözleşmelere, reklam metinlerinden YDT denemelerine kadar gerçek hayat senaryolarıyla dil becerilerini geliştir.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/practice" className="rounded-xl bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-all hover:scale-105 flex items-center gap-2">
                Hemen Başla <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* --- KARTLAR --- */}
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            <div className="flex flex-col items-start bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
               <BeakerIcon className="h-8 w-8 text-blue-600 mb-4" />
               <h3 className="text-xl font-bold text-gray-900">Teknik Çeviri</h3>
               <p className="mt-2 text-gray-600">Tıp ve Hukuk metinleri.</p>
            </div>
            <div className="flex flex-col items-start bg-green-50/50 p-8 rounded-3xl border border-green-100">
               <AcademicCapIcon className="h-8 w-8 text-green-600 mb-4" />
               <h3 className="text-xl font-bold text-gray-900">Sınav Merkezi</h3>
               <p className="mt-2 text-gray-600">YDT ve YÖKDİL hazırlık.</p>
            </div>
            <div className="flex flex-col items-start bg-purple-50/50 p-8 rounded-3xl border border-purple-100">
               <SparklesIcon className="h-8 w-8 text-purple-600 mb-4" />
               <h3 className="text-xl font-bold text-gray-900">Yaratıcı Çeviri</h3>
               <p className="mt-2 text-gray-600">Reklam ve Pazarlama.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}