
import { AvailableTours } from './components/AvailableTours';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Structure } from './components/Structure';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Structure />
      <AvailableTours />
      {/* <ProblemSets /> */}
      <Faq />
      {/* <CallToAction /> */}
      <Footer />
    </div>
  );
}
