"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; 
import Link from "next/link";
import { 
  ArrowLeftIcon, 
  BookOpenIcon, 
  ScaleIcon, 
  BeakerIcon, 
  CurrencyDollarIcon,
  MegaphoneIcon
} from '@heroicons/react/24/outline';

// --- TÜM VERİLER (EKONOMİ VE REKLAM DAHİL) ---
const TRANSLATION_DATA: any = {
  // 1. TIBBİ
  medical: {
    title: "Tıbbi Çeviri (Medical)",
    icon: <BeakerIcon className="w-8 h-8 text-blue-600" />,
    color: "blue",
    text: "Patient presented with a history of acute myocardial infarction. The initial ECG revealed ST-segment elevation in leads V1-V4, suggesting an anterior wall infarction. Immediate thrombolytic therapy was administered.",
    reference: "Hasta, akut miyokard enfarktüsü öyküsü ile başvurdu. İlk EKG, V1-V4 derivasyonlarında ST segment elevasyonu gösterdi, bu da ön duvar enfarktüsünü düşündürmektedir. Derhal trombolitik tedavi uygulandı."
  },
  // 2. HUKUKİ
  legal: {
    title: "Hukuki Çeviri (Legal)",
    icon: <ScaleIcon className="w-8 h-8 text-red-600" />,
    color: "red",
    text: "This Agreement shall be governed by and construed in accordance with the laws of the Republic of Turkey. Any dispute arising out of or in connection with this Agreement shall be submitted to the exclusive jurisdiction of Istanbul Courts.",
    reference: "İşbu Sözleşme, Türkiye Cumhuriyeti yasalarına tabi olacak ve bu yasalara göre yorumlanacaktır. İşbu Sözleşme'den doğan veya Sözleşme ile bağlantılı her türlü ihtilaf, İstanbul Mahkemelerinin münhasır yargı yetkisine sunulacaktır."
  },
  // 3. EDEBİ
  literary: {
    title: "Edebi Çeviri (Literary)",
    icon: <BookOpenIcon className="w-8 h-8 text-amber-600" />,
    color: "amber",
    text: "The sky above the port was the color of television, tuned to a dead channel. It was not like the darkness of the night, but a grey, static void that swallowed the city whole.",
    reference: "Limanın üzerindeki gökyüzü, ölü bir kanala ayarlanmış televizyon rengindeydi. Gecenin karanlığı gibi değil, şehri bütünüyle yutan gri, statik bir boşluktu."
  },
  // 4. EKONOMİ (YENİ)
  financial: {
    title: "Ekonomi & Finans (Financial)",
    icon: <CurrencyDollarIcon className="w-8 h-8 text-emerald-600" />,
    color: "emerald",
    text: "The central bank announced a hike in interest rates to curb inflation, which has reached its highest level in a decade. Consequently, the local currency appreciated against the dollar in early trading.",
    reference: "Merkez bankası, son on yılın en yüksek seviyesine ulaşan enflasyonu dizginlemek amacıyla faiz oranlarında artışa gidildiğini duyurdu. Sonuç olarak, yerel para birimi erken işlemlerde dolar karşısında değer kazandı."
  },
  // 5. REKLAM (YENİ)
  marketing: {
    title: "Reklam & Pazarlama (Marketing)",
    icon: <MegaphoneIcon className="w-8 h-8 text-purple-600" />,
    color: "purple",
    text: "Unleash your potential with the new X-Pro. Designed for those who dare to dream, engineered for those who strive for excellence. Experience the future, today.",
    reference: "Yeni X-Pro ile potansiyelini açığa çıkar. Hayal etmeye cüret edenler için tasarlandı, mükemmellik için çabalayanlar için üretildi. Geleceği bugünden deneyimle."
  }
};

export default function WorkshopPage() {
  const params = useParams();
  const field = params.field as string; 
  
  const [data, setData] = useState<any>(null);
  const [userInput, setUserInput] = useState("");
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    // Sayfa yüklenince doğru veriyi seç
    if (field && TRANSLATION_DATA[field]) {
      setData(TRANSLATION_DATA[field]);
    }
  }, [field]);

  // Yükleniyor veya Hata Durumu
  if (!data) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <p className="text-xl text-gray-500 font-bold mb-2">İçerik Yükleniyor...</p>
      <Link href="/practice" className="text-indigo-600 hover:underline">← Atölyeye Dön</Link>
    </div>
  );

  return (
    <div className={`min-h-screen bg-${data.color}-50 py-10 px-6`}>
      
      {/* Üst Bar */}
      <div className="max-w-6xl mx-auto flex items-center justify-between mb-8">
        <Link href="/practice" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-bold transition">
          <ArrowLeftIcon className="w-5 h-5" />
          Atölyeye Dön
        </Link>
        <div className="flex items-center gap-3 bg-white px-5 py-2 rounded-full shadow-sm">
          {data.icon}
          <h1 className="text-xl font-bold text-gray-800">{data.title}</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        
        {/* SOL TARAF: KAYNAK METİN */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Kaynak Metin</h3>
            <p className="text-xl leading-relaxed text-gray-800 font-serif">
              {data.text}
            </p>
          </div>

          {/* İPUÇLARI */}
          <div className="bg-white/50 p-6 rounded-xl border border-gray-200">
            <h4 className="font-bold text-gray-600 mb-2 text-sm">💡 İpucu: Anahtar Terimler</h4>
            <div className="flex flex-wrap gap-2">
               {field === 'medical' && <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Myocardial infarction: Miyokard enfarktüsü</span>}
               {field === 'legal' && <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Jurisdiction: Yargı yetkisi</span>}
               {field === 'literary' && <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded">Void: Boşluk</span>}
               
               {/* EKONOMİ İPUÇLARI */}
               {field === 'financial' && <>
                  <span className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs rounded">Curb inflation: Enflasyonu dizginlemek</span>
                  <span className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs rounded">Appreciate: Değer kazanmak</span>
               </>}
               
               {/* REKLAM İPUÇLARI */}
               {field === 'marketing' && <>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Unleash: Açığa çıkarmak</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Strive: Çabalamak</span>
               </>}
            </div>
          </div>
        </div>

        {/* SAĞ TARAF: ÇEVİRİ ALANI */}
        <div className="flex flex-col h-full">
          <div className="bg-white p-1 rounded-2xl shadow-md border border-gray-200 flex-grow flex flex-col relative overflow-hidden">
            
            <div className="p-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
               <span className="text-sm font-bold text-gray-500 uppercase">Sizin Çeviriniz</span>
               <button 
                 onClick={() => setShowResult(!showResult)}
                 className={`text-sm font-bold px-4 py-1 rounded-lg transition ${showResult ? 'bg-gray-200 text-gray-700' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
               >
                 {showResult ? 'Kapat' : 'Kıyasla'}
               </button>
            </div>

            <textarea 
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Çevirinizi buraya yazın..."
              className="w-full h-full p-6 text-lg outline-none resize-none text-gray-800 font-serif bg-white"
              spellCheck={false}
            />

            {/* KIYASLAMA EKRANI */}
            {showResult && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-8 overflow-y-auto animate-fade-in z-10">
                <h3 className="text-green-600 font-bold text-lg mb-2">✅ Referans Çeviri</h3>
                <p className="text-lg text-gray-800 font-serif border-l-4 border-green-500 pl-4 mb-8 bg-green-50 p-4 rounded-r-lg">
                  {data.reference}
                </p>

                <h3 className="text-indigo-600 font-bold text-lg mb-2">✍️ Sizin Çeviriniz</h3>
                <p className="text-lg text-gray-800 font-serif border-l-4 border-indigo-500 pl-4 bg-indigo-50 p-4 rounded-r-lg">
                  {userInput || "..."}
                </p>
                
                <button 
                  onClick={() => setShowResult(false)}
                  className="mt-6 w-full py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition"
                >
                  Devam Et
                </button>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}