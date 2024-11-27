
import Carousel from '../Carousel';
import ConcursosAbertos from '../ConcursosAbertos';
import UltimasNoticias from '../UltimasNoticias';
import './Home.css';

function Home() {
  return (
    <main className="home">
      <Carousel />
      <ConcursosAbertos />
      <UltimasNoticias />
    </main>
  );
}

export default Home;

