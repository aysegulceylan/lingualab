"use client";

import { useState, useEffect } from "react";

export default function LeaderboardPage() {
  const [siralama, setSiralama] = useState<any[]>([]);
  const [benimPuanim, setBenimPuanim] = useState(0);

  useEffect(() => {
    // 1. Senin gerçek puanını hafızadan alalım
    const kayitliPuan = localStorage.getItem("toplamPuan");
    const puan = kayitliPuan ? parseInt(kayitliPuan) : 1000;
    setBenimPuanim(puan);

    // 2. Sanal Rakipler (Botlar)
    const rakipler = [
      { isim: "Caner Y.", puan: 1250, avatar: "👨‍💻", renk: "bg-blue-100" },
      { isim: "Elif B.", puan: 1100, avatar: "👩‍🏫", renk: "bg-purple-100" },
      { isim: "Mehmet T.", puan: 950, avatar: "🦊", renk: "bg-orange-100" },
      { isim: "Selin K.", puan: 800, avatar: "🐱", renk: "bg-pink-100" },
      { isim: "Ahmet A.", puan: 1400, avatar: "🦁", renk: "bg-yellow-100" },
    ];

    // 3. Seni de bu listeye ekleyelim
    const tumListe = [
      ...rakipler,
      { isim: "SEN (Zeynep)", puan: puan, avatar: "👩‍🎨", renk: "bg-green-100", ben: true } // 'ben: true' ile seni işaretledik
    ];

    // 4. Puana göre büyükten küçüğe sıralayalım
    tumListe.sort((a, b) => b.puan - a.puan);

    setSiralama(tumListe);
  }, []);

  return (
    <div className="min-h-screen bg-pink-50 p-6 md:p-10">
      <div className="max-w-2xl mx-auto">
        
        {/* Başlık */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">🏆 Haftanın Liderleri</h1>
          <p className="text-gray-500 mt-2">Puan topla, zirveye yerleş!</p>
        </div>

        {/* LİSTE */}
        <div className="bg-white rounded-3xl shadow-xl border border-pink-100 overflow-hidden">
          
          {siralama.map((kisi, index) => (
            <div 
              key={index} 
              className={`flex items-center justify-between p-6 border-b border-gray-100 transition hover:bg-gray-50 
              ${kisi.ben ? "bg-green-50 hover:bg-green-100 border-l-4 border-l-green-500" : ""}`}
            >
              <div className="flex items-center gap-4">
                {/* Sıra Numarası (İlk 3'e madalya) */}
                <div className="w-8 text-center font-bold text-gray-400 text-xl">
                  {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : index + 1}
                </div>
                
                {/* Avatar */}
                <div className={`w-12 h-12 ${kisi.renk} rounded-full flex items-center justify-center text-2xl shadow-sm`}>
                  {kisi.avatar}
                </div>
                
                {/* İsim */}
                <div>
                  <h3 className={`font-bold text-lg ${kisi.ben ? "text-green-700" : "text-gray-700"}`}>
                    {kisi.isim} {kisi.ben && "(Sen)"}
                  </h3>
                  <p className="text-xs text-gray-400">Çevirmen Lvl {Math.floor(kisi.puan / 200)}</p>
                </div>
              </div>

              {/* Puan */}
              <div className="font-bold text-gray-600 bg-gray-100 px-4 py-1 rounded-full text-sm">
                {kisi.puan} Puan
              </div>
            </div>
          ))}

        </div>

        {/* Motive Edici Alt Not */}
        <div className="mt-6 text-center">
            {benimPuanim < 1400 ? (
                <p className="text-gray-600">
                    Lider Ahmet'i geçmek için <span className="font-bold text-pink-500">{1400 - benimPuanim + 20}</span> puan daha lazım! 
                    <br/>Hadi bir pratik daha yap! 🚀
                </p>
            ) : (
                <p className="text-green-600 font-bold text-xl">
                    TEBRİKLER! ZİRVENİN SAHİBİ SENSİN! 👑
                </p>
            )}
        </div>

      </div>
    </div>
  );
}