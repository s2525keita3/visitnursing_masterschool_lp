import Section from "../../shared/ui/Section";
import CTAButton from "../../shared/ui/CTAButton";
import { useStaggeredAnimation } from "../../shared/hooks/useStaggeredAnimation";
import { useForm } from "../../shared/hooks/useForm";
import { validateContactForm } from "../../shared/utils/validation";
import { ANIMATION_DELAYS } from "../../shared/constants/animations";
import type { ContactFormData } from "../../shared/types";

const initialState: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
  contactType: "consultation",
  seminarDate: "",
  preferredSchedule: "",
};

const ContactForm = () => {
  const formAnimationStyle = useStaggeredAnimation(
    ANIMATION_DELAYS.BASE,
    0,
    0
  );

  const {
    values: form,
    errors,
    status,
    handleInputChange,
    handleSubmit,
  } = useForm<ContactFormData>({
    initialValues: initialState,
    validate: validateContactForm,
    onSubmit: async (values) => {
      try {
        const response = await fetch("https://formspree.io/f/mkglekko", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error("送信に失敗しました");
        }
      } catch (error) {
        throw error;
      }
    },
  });

  return (
    <Section id="contact" tone="surface">
      <div className="text-center space-y-4 animate-fade-up">
        <p className="text-sm font-semibold text-brand-muted tracking-[0.3em]">CONTACT</p>
        <h2 className="text-4xl font-sans font-bold leading-tight tracking-tight">
          <span className="text-brand-dark">無料個別相談</span>
          <span className="text-brand-orange">のお申し込み</span>
        </h2>
        <p className="text-brand-muted">
          無料個別相談で、あなたの状況に合わせて「次の一手」を整理します。
        </p>
        <p className="text-lg font-black text-brand-dark">
          訪問看護を、想いだけで終わらせない。
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid animate-fade-up gap-6 rounded-3xl border border-brand-dark/5 bg-white p-10 shadow-card hover-lift"
        style={formAnimationStyle}
        noValidate
      >
        <label className="space-y-2">
          <span className="text-sm font-semibold text-brand-dark">お名前 *</span>
          <input
            required
            name="name"
            value={form.name}
            onChange={handleInputChange}
            className={`w-full rounded-2xl border px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-brand-orange/30 ${errors.name ? "border-red-500 focus:ring-red-500/30" : "border-brand-dark/15"}`}
            placeholder="山田 太郎"
            aria-label="お名前"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && <p id="name-error" className="text-sm font-semibold text-red-600" role="alert">{errors.name}</p>}
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-brand-dark">メールアドレス *</span>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            className={`w-full rounded-2xl border px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-brand-orange/30 ${errors.email ? "border-red-500 focus:ring-red-500/30" : "border-brand-dark/15"}`}
            placeholder="example@email.com"
            aria-label="メールアドレス"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && <p id="email-error" className="text-sm font-semibold text-red-600" role="alert">{errors.email}</p>}
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-brand-dark">電話番号 *</span>
          <input
            required
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleInputChange}
            className={`w-full rounded-2xl border px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-brand-orange/30 ${errors.phone ? "border-red-500 focus:ring-red-500/30" : "border-brand-dark/15"}`}
            placeholder="090-1234-5678"
            autoComplete="tel"
            aria-label="電話番号"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && <p id="phone-error" className="text-sm font-semibold text-red-600" role="alert">{errors.phone}</p>}
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-brand-dark">ご希望の相談日程 *</span>
          <input
            required
            name="preferredSchedule"
            value={form.preferredSchedule}
            onChange={handleInputChange}
            className={`w-full rounded-2xl border px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-brand-orange/30 ${errors.preferredSchedule ? "border-red-500 focus:ring-red-500/30" : "border-brand-dark/15"}`}
            placeholder="例：2月1日 10:00〜12:00、2月3日 14:00以降 など"
            aria-label="ご希望の相談日程"
            aria-invalid={!!errors.preferredSchedule}
            aria-describedby={errors.preferredSchedule ? "preferredSchedule-error" : undefined}
          />
          <p className="text-xs text-brand-muted">※複数の候補日をご記入いただけると調整がスムーズです</p>
          {errors.preferredSchedule && <p id="preferredSchedule-error" className="text-sm font-semibold text-red-600" role="alert">{errors.preferredSchedule}</p>}
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-brand-dark">ご相談内容</span>
          <textarea
            rows={4}
            name="message"
            value={form.message}
            onChange={handleInputChange}
            className="w-full rounded-2xl border border-brand-dark/15 px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
            placeholder="開業予定時期、資金調達状況、ご相談内容などをご記入ください。"
            aria-label="ご相談内容"
          />
        </label>
        {errors._form && (
          <div className="rounded-2xl border-2 border-red-500 bg-red-50 p-4" role="alert">
            <p className="text-sm font-semibold text-red-600">{errors._form}</p>
          </div>
        )}
        <div className="flex flex-col gap-3 items-center">
          <CTAButton type="submit" isLoading={status === "submitting"} disabled={status === "submitting"}>
            個別相談を申し込む
          </CTAButton>
          {status === "success" && (
            <div className="space-y-2 text-sm font-semibold text-emerald-600 animate-fade-in" role="alert">
              <p>お申し込みありがとうございます。</p>
              <p>ご入力いただいたメールアドレスへ、日程調整のご連絡を2営業日以内にお送りします。</p>
              <p className="text-xs text-emerald-500">※届かない場合は迷惑メールフォルダもご確認ください。</p>
            </div>
          )}
          {status === "error" && !errors._form && (
            <p className="text-sm font-semibold text-red-600" role="alert">送信に失敗しました。もう一度お試しください。</p>
          )}
        </div>
      </form>
    </Section>
  );
};

export default ContactForm;
