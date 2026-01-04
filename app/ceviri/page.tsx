"use client";

import { useState, useEffect } from "react";

const sorular = [
  {
    id: 1,
    kategori: "Tıbbi",
    konu: "Diyabet Belirtileri",
    zorluk: "Kolay",
    puan: 20,
    metin: "Type 1 diabetes is a chronic condition in which the pancreas produces little or no insulin.",
    ipucu: "'Chronic condition' terimini 'Kronik rahatsızlık' olarak çevirebilirsin.",
    icon: "🩺"
  },
  {
    id: 2,
    kategori: "Hukuki",
    konu: "Gizlilik Sözleşmesi",
    zorluk: "Orta",
    puan: 35,
    metin: "This Agreement shall be governed by and construed in accordance with the laws of the Republic of Turkey.",
    ipucu: "'Shall be governed' ifadesi 'tabidir' demektir.",
    icon: "⚖️"
  },
  {
    id: 3,
    kategori: "Edebi",
    konu: "Küçük Prens",
    zorluk: "Zor",
    puan: 50,
    metin: "It is only with the heart that one can see rightly; what is essential is invisible to the eye.",
    ipucu: "'Invisible to the eye' kısmı 'gözle görülmez' demektir.",
    icon: "📚"
  }
];

export default function CeviriSayfasi() {
  const [aktifSoruIndex, setAktifSoruIndex] = useState(0);
  const [metin, setMetin] = useState("");
  const [sonucGoster, setSonucGoster] = useState(false);
  const [yukleniyor, setYukleniyor] = useState(false);

  const soru = sorular[aktifSoruIndex];

  // Puanı hafızaya kaydetme fonksiyonu
  const puaniKaydet = (kazanilanPuan: number) => {
    // 1. Önce hafızadaki eski puanı bul (yoksa 0 say)
    const eskiPuan = localStorage.getItem("toplamPuan");
    const mevcutPuan = eskiPuan ? parseInt(eskiPuan) : 1000; // Başlangıç puanı 1000 olsun

    // 2. Yeni puanı üzerine ekle
    const yeniPuan = mevcutPuan + kazanilanPuan;

    // 3. Tekrar hafızaya yaz
    localStorage.setItem("toplamPuan", yeniPuan.toString());
  };

  const kontrolEt = () => {
    if (metin.length < 5) {
      alert("Lütfen biraz daha uzun bir çeviri yap şekerim! 😉");
      return;
    }

    setYukleniyor(true);
    setTimeout(() => {
      setYukleniyor(false);
      setSonucGoster(true);
      // SONUÇ GÖSTERİLDİĞİ AN PUANI KAYDET!
      puaniKaydet(soru.puan);
    }, 1500);
  };

  const sonrakiSoruyaGec = () => {
    setSonucGoster(false);
    setMetin("");
    
    if (aktifSoruIndex + 1 < sorular.length) {
      setAktifSoruIndex(aktifSoruIndex + 1);
    } else {
      alert("Tebrikler! Tüm sorular bitti. Başa dönüyoruz!");
      setAktifSoruIndex(0);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 p-6 md:p-10">
      {/* Üst Bilgi */}
      <div className="max-w-6xl mx-auto mb-6 flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-pink-100 gap-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{soru.icon}</span>
          <div>
            <h1 className="font-bold text-gray-800 text-lg">{soru.kategori} Çeviri</h1>
            <p className="text-xs text-gray-500">{soru.konu}</p>
          </div>
        </div>
        <div className="flex gap-3">
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
              🏆 +{soru.puan} Puan
            </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 h-[400px]">
        {/* Sol */}
        <div className="bg-white p-6 rounded-3xl shadow-md border-2 border-pink-200 relative">
          <h3 className="text-gray-400 font-bold mb-4 text-sm">KAYNAK METİN</h3>
          <p className="text-lg text-gray-800 font-serif">"{soru.metin}"</p>
          <div className="mt-4 p-3 bg-blue-50 rounded-xl text-sm text-blue-800">💡 {soru.ipucu}</div>
        </div>

        {/* Sağ */}
        <div className="relative">
            {sonucGoster ? (
                <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-green-400 h-full flex flex-col items-center justify-center text-center animate-bounce-short">
                    <div className="text-5xl mb-2">🎉</div>
                    <h2 className="text-2xl font-bold text-green-600">Tebrikler!</h2>
                    <p className="text-gray-500 mb-4">Puanın hesabına eklendi.</p>
                    <div className="bg-yellow-50 p-3 rounded-xl mb-4 w-full">
                        <div className="text-yellow-800 font-bold text-xl">+{soru.puan} Puan</div>
                    </div>
                    <button onClick={sonrakiSoruyaGec} className="bg-gray-800 text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition">
                        Sonraki Soru ➡️
                    </button>
                </div>
            ) : (
                <div className="bg-white p-6 rounded-3xl shadow-md border-2 border-dashed border-gray-300 h-full flex flex-col">
                    <textarea 
                        className="w-full h-full resize-none outline-none text-lg p-2"
                        placeholder="Çevirini yaz..."
                        value={metin}
                        onChange={(e) => setMetin(e.target.value)}
                    ></textarea>
                    <button onClick={kontrolEt} disabled={yukleniyor} className="mt-4 w-full bg-pink-500 text-white font-bold py-3 rounded-full hover:bg-pink-600 transition">
                        {yukleniyor ? "Kontrol Ediliyor..." : "Kontrol Et ✨"}
                    </button>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}