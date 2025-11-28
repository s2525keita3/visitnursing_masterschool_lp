import Hero from "./features/hero/Hero";
import Problems from "./features/problems/Problems";
import Benefits from "./features/benefits/Benefits";
import Achievements from "./features/achievements/Achievements";
import RoiSection from "./features/roi/RoiSection";
import Testimonials from "./features/testimonials/Testimonials";
import Founder from "./features/founder/Founder";
import Seminar from "./features/seminar/Seminar";
import AiAdvisor from "./features/ai-advisor/AiAdvisor";
import ContactForm from "./features/contact/ContactForm";
import ProgressBar from "./shared/layout/ProgressBar";
import Header from "./shared/layout/Header";

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


