import { FormEvent, useState } from "react";
import Section from "./Section";
import CTAButton from "./CTAButton";

const initialState = { name: "", email: "", phone: "", message: "" };

const ContactForm = () => {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("success");
    setForm(initialState);
  };

  return (
    <Section id="contact" tone="surface">
      <div className="text-center space-y-4 animate-fade-up">
        <p className="text-sm font-semibold text-brand-muted tracking-[0.3em]">CONTACT</p>
        <h2 className="text-4xl font-serif text-brand-dark">無料面談のお申し込み</h2>
        <p className="text-brand-muted">60分のZoom面談で、資金・採用・マーケティングのお悩みを整理します。</p>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-6 bg-white rounded-3xl border border-brand-dark/10 shadow-card hover-lift p-10 animate-fade-up" style={{ animationDelay: "0.1s" }}>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-brand-dark">お名前 *</span>
          <input
            required
            value={form.name}
            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            className="w-full rounded-2xl border border-brand-dark/15 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 transition-all"
            placeholder="山田 太郎"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-brand-dark">メールアドレス *</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
            className="w-full rounded-2xl border border-brand-dark/15 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 transition-all"
            placeholder="example@email.com"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-brand-dark">電話番号</span>
          <input
            value={form.phone}
            onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
            className="w-full rounded-2xl border border-brand-dark/15 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 transition-all"
            placeholder="090-1234-5678"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-brand-dark">ご相談内容</span>
          <textarea
            rows={4}
            value={form.message}
            onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
            className="w-full rounded-2xl border border-brand-dark/15 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 transition-all"
            placeholder="開業予定時期、資金調達状況などをご記入ください。"
          />
        </label>
        <div className="flex flex-col gap-3 items-center">
          <CTAButton type="submit">送信して無料面談を予約する</CTAButton>
          {status === "success" && <p className="text-sm font-semibold text-brand-gold animate-fade-in">送信が完了しました。24時間以内にご連絡いたします。</p>}
        </div>
      </form>
    </Section>
  );
};

export default ContactForm;

