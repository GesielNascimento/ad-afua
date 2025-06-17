import HeroBanner from "../components/HeroBanner";
import Agenda from "../components/Agenda";
import EventsHighlight from "../components/EventsHighlight";
import Noticias from "../components/Noticias";
import VideoInstitucional from "../components/VideoInstitucional";
import Doacoes from "../components/Doacoes";

export default function Home() {
  return (
  <>
    <HeroBanner />
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-green-800 text-center mb-10">
        Nossas Programações
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        <Agenda />
        <EventsHighlight />
        
      </div>
    </section>

    <Noticias />
    <VideoInstitucional />
    <Doacoes />


  </>
);
}
