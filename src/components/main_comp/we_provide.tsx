import { Code, Shield, User, Cloud } from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";
import { ScratchToReveal } from "@/components/magicui/scratch-to-reveal";

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              İnternette özgürlüğümüzü geri almanın zamanı geldi
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Mahremiyet bir lüks haline geldi, ama gerçekten öyle miydi? 
              Verilerimizin şirketler tarafından kazanca dönüştürülmesinden bıkmadık mı? 
              HAKLARIMIZI GERİ ALMA VAKTİ GELDİ!
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {/* Gizlilik */}
          <MagicCard className="animate-fade-in animate-delay-100 p-6">
            <div className="pb-2">
              <Shield className="h-12 w-12 text-primary mb-2" />
              <h3 className="text-xl font-bold mb-2">Kendini yuvanda hisset</h3>
              <p className="text-muted-foreground mb-4">
                Evde ya da dışarıda izleniyor musun? 
                Peki, internette neden dinleniyorsun? 
                HAKLARINI SAVUNMA ZAMANI!
              </p>
            </div>
            <div className="pt-2">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>İz bırakmayan bağlantılar</li>
                <li>Uçtan uca şifreli sohbet</li>
                <li>Gizlilik odaklı tasarım</li>
                <li>Anonim iletişim</li>
              </ul>
            </div>
          </MagicCard>

          {/* Özgürlük */}
          <MagicCard className="animate-fade-in animate-delay-200 p-6">
            <div className="pb-2">
              <User className="h-12 w-12 text-primary mb-2" />
              <h3 className="text-xl font-bold mb-2">Sınırsız Özgürlük</h3>
              <p className="text-muted-foreground mb-4">
                Sansürsüz, kısıtlamalardan uzak bir iletişim. Sadece sen ve sevdiklerin.
                Paylaş, ifade et. Hiçbir algoritma seni gözetlemiyor!
              </p>
            </div>
            <div className="pt-2">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Takip edilemeyen iletişim</li>
                <li>Düşünce özgürlüğü garantisi</li>
                <li>Merkeziyetsiz yapı</li>
                <li>Dijital iz kontrolü</li>
              </ul>
            </div>
          </MagicCard>

          {/* Gölge Modu */}
          <MagicCard className="animate-fade-in animate-delay-300 p-6">
            <div className="pb-2">
              <Code className="h-12 w-12 text-primary mb-2" />
              <h3 className="text-xl font-bold mb-2">Takip edilemezlik</h3>
              <p className="text-muted-foreground mb-4">
                Hayalet gibi internette gez! 
                Kimse kiminle konuştuğunu ya da ne paylaştığını bilemez. 
                Dijital ayak izlerini sil, özgürce konuş.
              </p>
            </div>
            <div className="pt-2">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>İzleyici engelleme</li>
                <li>Anonim gezinme</li>
                <li>Şifreli sohbet odaları</li>
                <li>Dijital minimalizm</li>
              </ul>
            </div>
          </MagicCard>

          {/* Kişisel Alan */}
          <MagicCard className="animate-fade-in animate-delay-400 p-6">
            <div className="pb-2">
              <Cloud className="h-12 w-12 text-primary mb-2" />
              <h3 className="text-xl font-bold mb-2">Kendi kurallarını koy</h3>
              <p className="text-muted-foreground mb-4">
                Gruplar oluştur, kendi kurallarınla paylaş.
                Sokakta arkadaşlarınla yaptığın gibi, dijital ortamda da kendi alanını yarat.
              </p>
            </div>
            <div className="pt-2">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Kişisel bulut sunucuları</li>
                <li>Özel ağ oluşturma</li>
                <li>Şifreli depolama</li>
                <li>Kuralları sen belirle</li>
              </ul>
            </div>
          </MagicCard>
        </div>

        {/* Üstteki Yazı */}
        <div className="w-full text-center z-10 mt-8"> {/* mb-8 ile alt boşluk eklendi */}
          <p className="text-lg font-mono text-neon animate-pulse">
            Her şeyi ortaya mı çıkartmamız gerekiyordu?
          </p>
        </div>

        {/* ScratchToReveal Ortada */}
        <div className="flex justify-center items-center mt-8">
          <ScratchToReveal
            width={250}
            height={250}
            minScratchPercentage={70}
            className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
    gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]} // Soft neon gradient
          >
            <p className="text-2xl text-center font-bold text-gray-600">
              hakkımız değil miydi gizlilik ve özel hayat, insanların izlemediği ve bizi fişlemediği?
            </p>
          </ScratchToReveal>
        </div>
      </div>
    </section>
  );
};
