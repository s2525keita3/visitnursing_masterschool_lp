import { Quote } from "lucide-react";
import Section from "../../shared/ui/Section";
import Pill from "../../shared/ui/Pill";
import {
  testimonials,
  type Testimonial,
} from "../../content/testimonials"; // 卒業生の声データを分離し、LP以外の媒体からも参照しやすくする

const Testimonials = () => (
  <Section>
    <div className="space-y-6 text-center animate-fade-up">
      <Pill icon={Quote}>Client Stories</Pill>
      <h2 className="text-center font-sans text-4xl font-black leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
        <span className="block text-brand-dark">数字で語る</span>
        <span className="mt-2 block text-brand-orange">
          卒業生の声
        </span>
      </h2>
      <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-brand-dark/80 md:text-xl">
        定量的な成果と定性的な学びの両方を可視化し、再現性を証明します。
      </p>
    </div>
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((item: Testimonial, index) => (
        <div
          key={item.company}
          className="space-y-4 rounded-3xl border border-brand-dark/5 bg-white p-8 shadow-card hover-lift animate-fade-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <p className="text-xs font-semibold text-brand-muted tracking-wide">{item.result}</p>
          <h3 className="text-xl font-sans text-brand-dark">{item.company}</h3>
          <p className="text-sm font-semibold text-brand-muted">{item.name}</p>
          <p className="text-brand-muted leading-relaxed">{item.comment}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default Testimonials;


