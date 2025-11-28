import { Calendar, Clock, MapPin } from "lucide-react";
import Section from "./Section";
import CTAButton from "./CTAButton";

const Seminar = () => (
  <Section>
    <div className="rounded-3xl bg-white shadow-card hover-lift border border-brand-dark/10 p-10 space-y-8 animate-fade-up">
      <div className="space-y-3 text-center">
        <p className="text-sm font-semibold text-brand-muted tracking-[0.3em]">SEMINAR</p>
        <h2 className="text-4xl font-serif font-bold leading-tight tracking-tight">
          <span className="text-brand-dark">無料ウェビナー＆</span>
          <span className="text-brand-orange">個別相談会</span>
        </h2>
        <p className="text-brand-muted">
          最新の報酬改定と金融トレンドを踏まえて、「いま開業すべきか」を判断できる60分のセッション。
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 text-brand-dark font-semibold">
        <div className="flex items-center gap-3 justify-center border border-brand-dark/10 rounded-2xl px-4 py-3 hover-lift">
          <Calendar className="w-5 h-5" />
          毎週 火・木・土
        </div>
        <div className="flex items-center gap-3 justify-center border border-brand-dark/10 rounded-2xl px-4 py-3 hover-lift">
          <Clock className="w-5 h-5" />
          13:00 / 20:00
        </div>
        <div className="flex items-center gap-3 justify-center border border-brand-dark/10 rounded-2xl px-4 py-3 hover-lift">
          <MapPin className="w-5 h-5" />
          Zoom（録画提供あり）
        </div>
      </div>
      <div className="text-center">
        <CTAButton href="#contact">無料ウェビナーに申し込む</CTAButton>
      </div>
    </div>
  </Section>
);

export default Seminar;


