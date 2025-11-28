import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Benefits from "./components/Benefits";
import Achievements from "./components/Achievements";
import RoiSection from "./components/RoiSection";
import Testimonials from "./components/Testimonials";
import Founder from "./components/Founder";
import Seminar from "./components/Seminar";
import AiAdvisor from "./components/AiAdvisor";
import ContactForm from "./components/ContactForm";
import ProgressBar from "./components/ProgressBar";
import Header from "./components/Header";

const App = () => (
  <div className="min-h-screen bg-background text-foreground font-sans selection:bg-brand-orange selection:text-white">
    <ProgressBar />
    <Header />
    <Hero />
    <Problems />
    <Benefits />
    <Achievements />
    <RoiSection />
    <Testimonials />
    <Founder />
    <Seminar />
    <AiAdvisor />
    <ContactForm />
  </div>
);

export default App;


