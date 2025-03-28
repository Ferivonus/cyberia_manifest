import { Key, Network, Share, Lock } from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";

export const Code: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Anahtarlarla Örülmüş Bir Dünya
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Her anahtar bir kapıyı açar. Gerçek dünya da öyle değil midir? Sizin oluşturduğunuz benzersiz anahtarlar, hem cihazlarınız 
              arasında köprü kurar hem de dünyayla olan bağlantınızı şekillendirir. Merkezi sunucu yok, 
              sadece sizin kontrolünüzdeki direkt bağlantılar.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {/* Anahtar Yönetimi */}
          <MagicCard className="animate-fade-in animate-delay-100 p-6">
            <div className="pb-2">
              <Key className="h-12 w-12 text-primary mb-2" />
              <h3 className="text-xl font-bold mb-2">Anahtarını Oluştur</h3>
              <p className="text-muted-foreground mb-4">
                Bağlantı kurulmasını istediğin her bağlantı için kurmak istediğin insanla karşılıklı anahtarlar oluştur.
                Kendi anahtar çiftlerini yönet, bağlantılarını kişiselleştir ve tam kontrolü elinde tut.
              </p>
            </div>
            <div className="pt-2">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Benzersiz cihaz anahtarları</li>
                <li>Anahtar çifti oluşturma</li>
                <li>Şifreleme tabanlı kimlik</li>
                <li>Anahtar yaşam döngüsü yönetimi</li>
              </ul>
            </div>
          </MagicCard>

          {/* Bağlantı Protokolü */}
          <MagicCard className="animate-fade-in animate-delay-200 p-6">
            <div className="pb-2">
              <Share className="h-12 w-12 text-primary mb-2" />
              <h3 className="text-xl font-bold mb-2">Anahtarını Paylaş</h3>
              <p className="text-muted-foreground mb-4">
                Güvendiğin kişilerle anahtar alışverişi yap. Paylaştığın her anahtar, 
                ağına yeni bir cihaz eklemenin yolunu açar. Yeni geliştirmiş olduğum protokolle 
                güvenli bağlantı kur.
              </p>
            </div>
            <div className="pt-2">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Anahtar paylaşımlı iletişim</li>
                <li>Ephemeral bağlantı token&apos;ları</li>
                <li>Karşılıklı imza destekli erişim</li>
                <li>Zaman kısıtlı paylaşım linkleri</li>
              </ul>
            </div>
          </MagicCard>

          {/* Şifreleme Katmanı */}
          <MagicCard className="animate-fade-in animate-delay-300 p-6">
            <div className="pb-2">
              <Lock className="h-12 w-12 text-primary mb-2" />
              <h3 className="text-xl font-bold mb-2">Anahtarınla Şifrele</h3>
              <p className="text-muted-foreground mb-4">
                Tüm iletişimlerin sadece senin ve bağlantı kurduğun cihazların 
                anahtarlarıyla şifrelenir. Her mesaj, her dosya transferi özel 
                bir kripto zarfa konulur ve özel bir şifreli ağa gider.
              </p>
            </div>
            <div className="pt-2">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Uçtan uca anahtar şifrelemesi</li>
                <li>Otomatik anahtar rotasyonu</li>
                <li>Post-kuantum kriptografi</li>
                <li>Çapraz cihaz şifre senkronizasyonu</li>
              </ul>
            </div>
          </MagicCard>

          {/* Ağ Oluşturma */}
          <MagicCard className="animate-fade-in animate-delay-400 p-6">
            <div className="pb-2">
              <Network className="h-12 w-12 text-primary mb-2" />
              <h3 className="text-xl font-bold mb-2">Anahtarlarla Ör Kendini</h3>
              <p className="text-muted-foreground mb-4">
                Paylaştığın her anahtar, kişisel ağını genişletir. Cihazlar 
                arasında kendi mesh ağını oluştur. Merkezi olmayan bu yapıda 
                her bağlantı noktası senin kontrolünde.
              </p>
            </div>
            <div className="pt-2">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Otomatik ağ keşfi</li>
                <li>Anahtar tabanlı routing</li>
                <li>Distributed hash table</li>
                <li>Self-healing bağlantılar</li>
              </ul>
            </div>
          </MagicCard>
        </div>
      </div>
    </section>
  );
};