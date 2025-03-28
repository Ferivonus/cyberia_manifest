import { Services } from "../components/main_comp/we_provide";
import { Code } from "../components/main_comp/how_we_do";
import { Header } from "../components/main_comp/cyberia_header";


const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <Services />
      <Code />
    </div>
  );
};

export default HomePage;