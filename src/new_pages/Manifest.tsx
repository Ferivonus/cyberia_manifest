import { TextAnimate } from "../components/magicui/text-animate";

const Manifest = () => {
  const text = [
    "Artık özgürlüğümüzü geri alma zamanı gelmedi mi?",
    "Her hareketimizin izlendiği, her kelimemizin kaydedildiği bir dünyada…",
    "Gerçekten özgür müyüz?",
    "Eskiden, internette dolaşırken gözlerin üzerimizde olmadığını bilirdik.",
    "Şimdi ise gizlilik bir lüks haline geldi.",
    "Ben, geliştirdiğim teknolojiyi herkese açık bir şekilde paylaşıyorum.",
    "Bilginin yalnızca belirli güçlerin elinde toplanmasını istemiyorum.",
    "Ancak bunu kötüye kullanıldığını görmek için yapmıyorum.",
    "Bunu birlikte değiştirebiliriz.",
    "Çünkü güçlü olanların bizi izlemesine boyun eğmek zorunda değiliz.",
    "Özgürlük, birlikte inşa ettiğimiz bir şeydir.",
    "Seçim bizim."
  ];

  return (
    <div className="p-6 min-h-screen bg-black text-white flex items-center justify-center">
      <TextAnimate
        animation="blurInUp"
        by="line"
        duration={5}
        className="text-xl font-mono text-gray-300 leading-relaxed max-w-2xl text-center"
      >
        {text.join("\n")}
      </TextAnimate>
    </div>
  );
};

export default Manifest;
