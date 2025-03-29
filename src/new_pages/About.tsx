import { Code, Shield, User, Cloud } from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";




const AboutPage: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Biz birlikte büyüyecek bir grubuz
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              İnternet, insanların izlenmesi için değil, bilginin paylaşımı için oluşturuldu.<br></br>
              İnternet, bir takım şirketlerin güç kazanması için değil, kendimiz gibi insanlarla tanışmak içindir. <br></br>
              Bizler, herkesin bildiğini konuşamamaktan sıkılan, özgürlüğünü yeniden almaya karar vermiş insanlarız.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {/* Gizlilik */}
          <MagicCard className="animate-fade-in animate-delay-100 p-6">
            <div className="pb-2">
              <Shield className="h-12 w-12 text-primary mb-2" />
              <h3 className="text-xl font-bold mb-2">Herkese Açık Proje</h3>
              <p className="text-muted-foreground mb-4">
                Bu proje, açık kaynak olarak geliştiriyorum ve herkesin kullanımına sunacağım, özgürlük bir haktır, bunu sadece sevdiklerim hak etmiyor.
              </p>
            </div>
            <div className="pt-2">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Geliştirici dostu yapı</li>
                <li>Geliştirilmeye müsait yapı</li>
                <li>Açık kaynak güvenli kod</li>
                <li>Kontrol edilebilir, güvenli</li>
              </ul>
            </div>
          </MagicCard>

          {/* Özgürlük */}
          <MagicCard className="animate-fade-in animate-delay-200 p-6">
            <div className="pb-2">
              <User className="h-12 w-12 text-primary mb-2" />
              <h3 className="text-xl font-bold mb-2">Etik Değerler</h3>
              <p className="text-muted-foreground mb-4">
                Projede yer alacak kişilerin etik değerlere saygılı olmasını bekliyorum. Gizliliğe, güvenliğe ve ifade özgürlüğüne öncelik veren bir topluluk oluşturmayı hedefliyoruz.
              </p>
            </div>
            <div className="pt-2">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Sorumluluk projesi</li>
                <li>Kontrollü büyüme</li>
                <li>Merkeziyetsiz yapı</li>
                <li>Amacı dışına çıkılmaması gereken proje</li>
              </ul>
            </div>
          </MagicCard>

          {/* Gölge Modu */}
          <MagicCard className="animate-fade-in animate-delay-300 p-6">
            <div className="pb-2">
              <Code className="h-12 w-12 text-primary mb-2" />
              <h3 className="text-xl font-bold mb-2">Topluluk ve İş Birliği</h3>
              <p className="text-muted-foreground mb-4">
                Bu projeye katılan herkes, geliştirilen sistemin bir parçası olabilir ve katkılarıyla daha geniş bir iletişim ağı kurulmasına yardımcı olabilir. İş birliği temel prensiplerimizdendir.
              </p>
            </div>
            <div className="pt-2">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Grup çalışması</li>
                <li>Açık kaynak sorumluluk projesi</li>
                <li>İlk web 4 geliştiricileri</li>
                <li>Dijital minimalizm</li>
              </ul>
            </div>
          </MagicCard>

          {/* Kişisel Alan */}
          <MagicCard className="animate-fade-in animate-delay-400 p-6">
            <div className="pb-2">
              <Cloud className="h-12 w-12 text-primary mb-2" />
              <h3 className="text-xl font-bold mb-2">Eş zamanı geliştirme</h3>
              <p className="text-muted-foreground mb-4">
                Projenin geliştirilme sürecinde tek başıma olduğum için zorlandığım noktalar olabiliyor, yardımcı olmak isteyen olursa dinleyebilirim.
                desteklerinizi bekliyorum.
              </p>
            </div>
            <div className="pt-2">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Teknoloji yardımı kabulü</li>
                <li>Yazılımda iyi olan insanların desteği</li>
                <li>Grup çalışması önemi</li>
                <li>Düzenli proje takibi</li>
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

      </div>
    </section>
  );
}

export default AboutPage;