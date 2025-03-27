import { TextAnimate } from "./../components/magicui/text-animate";

const Manifest: React.FC = () => {
  return (
    <div>
      <h1>Manifest Page</h1>
      <TextAnimate animation="blurInUp" by="character" duration={5}>
        Welcome to the Manifest Page! Watch this text animate character by character.
      </TextAnimate>
    </div>
  );
};

export default Manifest;