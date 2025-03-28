import { TextAnimate } from "../components/magicui/text-animate";

const Manifest: React.FC = () => {
  return (
    <div className="p-6">
      {/* Büyük başlık */}
      <h1 className="text-4xl font-bold text-neon mb-4">
        Manifest Page
      </h1>

      

      {/* Animasyonlu metin için daha büyük boyut */}
      <TextAnimate
        animation="blurInUp"
        by="character"
        duration={5}
        className="text-2xl font-mono text-gray-200 leading-relaxed"
      >
        Welcome to the Manifest Page! Watch this text animate character by character.
      </TextAnimate>
    </div>
  );
};

export default Manifest;
