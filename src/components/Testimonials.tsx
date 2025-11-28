import { Quote } from "lucide-react";
import Section from "./Section";
import Pill from "./Pill";

const testimonials = [
  {
    company: "えめ訪問看護ステーション和歌山",
    name: "代表 北山さま",
    result: "月商 2.3倍 / 採用2名",
    comment:
      "融資資料と採用導線をセットで整えた結果、6ヶ月で2拠点目の準備に入れるほどキャッシュが安定しました。",
  },
  {
    company: "ファースト訪問看護ステーション灘",
    name: "代表 髙橋さま",
    result: "稼働率 82% / 利益率 +3.2pt",
    comment:
      "週次KPIレビューとSlack相談のスピード感が圧倒的。現場の迷いが消え、数字で意思決定できるようになりました。",
  },
  {
    company: "訪問看護ステーションPLUS",
    name: "共同代表 山口さま",
    result: "新規紹介 18件 / 採用0離職",
    comment:
      "マーケ導線と評価制度を同じタイミングで整えられたのが大きい。『紹介が止まらない理由』をようやく理解できました。",
  },
];

const Testimonials = () => (
  <Section>
    <div className="text-center space-y-6 animate-fade-up">
      <Pill icon={Quote}>Client Stories</Pill>
      <h2 className="text-4xl font-serif text-brand-dark">数字で語る卒業生の声</h2>
      <p className="text-brand-muted max-w-3xl mx-auto">定量的な成果と定性的な学びの両方を可視化し、再現性を証明します。</p>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((item, index) => (
        <div
          key={item.company}
          className="rounded-2xl border border-brand-dark/10 bg-white p-8 shadow-card hover-lift space-y-4 animate-fade-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <p className="text-xs font-semibold text-brand-muted tracking-wide">{item.result}</p>
          <h3 className="text-xl font-serif text-brand-dark">{item.company}</h3>
          <p className="text-sm font-semibold text-brand-muted">{item.name}</p>
          <p className="text-brand-muted leading-relaxed">{item.comment}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default Testimonials;


