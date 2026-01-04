import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md border border-pink-100">
        
        {/* Başlık */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Aramıza Katıl! 🚀</h1>
          <p className="text-gray-500">Çeviri dünyasına ilk adımını at.</p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2 ml-1">Adın Soyadın</label>
            <input 
              type="text" 
              className="w-full bg-gray-50 text-gray-800 border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pink-400 focus:bg-white transition"
              placeholder="Zeynep Yılmaz"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2 ml-1">E-posta Adresi</label>
            <input 
              type="email" 
              className="w-full bg-gray-50 text-gray-800 border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pink-400 focus:bg-white transition"
              placeholder="ornek@email.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2 ml-1">Şifre Belirle</label>
            <input 
              type="password" 
              className="w-full bg-gray-50 text-gray-800 border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pink-400 focus:bg-white transition"
              placeholder="••••••••"
            />
          </div>

          <button className="w-full bg-pink-500 text-white font-bold py-3 rounded-xl hover:bg-pink-600 hover:scale-[1.02] transition shadow-lg shadow-pink-200 mt-2">
            Ücretsiz Kayıt Ol
          </button>
        </div>

        {/* Alt Kısım */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Zaten hesabın var mı? {' '}
          <Link href="/login" className="text-pink-500 font-bold hover:underline">
            Giriş Yap
          </Link>
        </div>

      </div>
    </div>
  );
}