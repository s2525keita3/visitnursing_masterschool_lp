import Section from "../../shared/ui/Section";
import CTAButton from "../../shared/ui/CTAButton";
import { useStaggeredAnimation } from "../../shared/hooks/useStaggeredAnimation";
import { useForm } from "../../shared/hooks/useForm";
import { validateContactForm } from "../../shared/utils/validation";
import { ANIMATION_DELAYS } from "../../shared/constants/animations";
import { scheduleOptions } from "../../content/seminar";
import type { ContactFormData } from "../../shared/types";

const initialState: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
  contactType: "seminar",
  seminarDate: "",
};

/**
 * お問い合わせフォームコンポーネント
 * useFormフックでバリデーション・エラーハンドリング・送信処理を統合
 * CRO最適化：セミナー申込と個別相談を選択可能に
 */
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
    handleChange,
    handleSubmit,
  } = useForm<ContactFormData>({
    initialValues: initialState,
    validate: validateContactForm,
    onSubmit: async (values) => {
      try {
        // Formspreeエンドポイントに送信
        const response = await fetch("https://formspree.io/f/mkglekko", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        // レスポンスが成功でない場合はエラーをスロー
        if (!response.ok) {
          throw new Error("送信に失敗しました");
        }

        // 成功時のログ（開発環境のみ）
        if (import.meta.env.DEV) {
          console.log("Form submitted successfully:", values);
        }
      } catch (error) {
        // エラーログ（開発環境のみ）
        if (import.meta.env.DEV) {
          console.error("Form submission error:", error);
        }
        // useForm側でエラー状態にするためにスロー
        throw error;
      }
    },
  });

  return (
    <Section id="contact" tone="surface">
      <div className="text-center space-y-4 animate-fade-up">
        <p className="text-sm font-semibold text-brand-muted tracking-[0.3em]">CONTACT</p>
        <h2 className="text-4xl font-sans font-bold leading-tight tracking-tight">
          <span className="text-brand-dark">セミナー申込</span>
          <span className="text-brand-orange">または個別相談</span>
        </h2>
        <p className="text-brand-muted">
          まずは無料セミナーで「経営の正解」を体感。個別相談も承ります。
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid animate-fade-up gap-6 rounded-3xl border border-brand-dark/5 bg-white p-10 shadow-card hover-lift"
        style={formAnimationStyle}
        noValidate
      >
        <label className="space-y-2">
          <span className="text-sm font-semibold text-brand-dark">
            お名前 *
          </span>
          <input
            required
            name="name"
            value={form.name}
            onChange={handleInputChange}
            className={`w-full rounded-2xl border px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-brand-orange/30 ${
              errors.name
                ? "border-red-500 focus:ring-red-500/30"
                : "border-brand-dark/15"
            }`}
            placeholder="山田 太郎"
            aria-label="お名前"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p
              id="name-error"
              className="text-sm font-semibold text-red-600"
              role="alert"
            >
              {errors.name}
            </p>
          )}
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-brand-dark">
            メールアドレス *
          </span>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            className={`w-full rounded-2xl border px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-brand-orange/30 ${
              errors.email
                ? "border-red-500 focus:ring-red-500/30"
                : "border-brand-dark/15"
            }`}
            placeholder="example@email.com"
            aria-label="メールアドレス"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p
              id="email-error"
              className="text-sm font-semibold text-red-600"
              role="alert"
            >
              {errors.email}
            </p>
          )}
        </label>
        {/* お申し込み種別 */}
        <div className="space-y-3">
          <span className="text-sm font-semibold text-brand-dark">
            お申し込み種別 *
          </span>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="flex cursor-pointer items-center gap-3 rounded-2xl border-2 border-brand-dark/10 bg-white p-4 transition-all hover:border-brand-orange/30 hover:bg-brand-orange/5">
              <input
                type="radio"
                name="contactType"
                value="seminar"
                checked={form.contactType === "seminar"}
                onChange={handleInputChange}
                className="h-5 w-5 cursor-pointer accent-brand-orange"
                required
                aria-label="セミナー申込"
              />
              <div className="flex-1">
                <p className="font-semibold text-brand-dark">セミナー申込</p>
                <p className="text-xs text-brand-muted">
                  無料オンラインセミナーに参加
                </p>
              </div>
            </label>
            <label className="flex cursor-pointer items-center gap-3 rounded-2xl border-2 border-brand-dark/10 bg-white p-4 transition-all hover:border-brand-orange/30 hover:bg-brand-orange/5">
              <input
                type="radio"
                name="contactType"
                value="consultation"
                checked={form.contactType === "consultation"}
                onChange={(e) => {
                  handleChange("contactType", e.target.value as ContactFormData["contactType"]);
                  if (e.target.value === "consultation") {
                    handleChange("seminarDate", "");
                  }
                }}
                className="h-5 w-5 cursor-pointer accent-brand-orange"
                required
                aria-label="個別相談"
              />
              <div className="flex-1">
                <p className="font-semibold text-brand-dark">個別相談</p>
                <p className="text-xs text-brand-muted">
                  60分のZoom面談で個別相談
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* セミナー日程選択（セミナー申込を選んだ場合のみ表示） */}
        {form.contactType === "seminar" && (
          <label className="space-y-2">
            <span className="text-sm font-semibold text-brand-dark">
              希望セミナー日程 *
            </span>
            <select
              required={form.contactType === "seminar"}
              name="seminarDate"
              value={form.seminarDate}
              onChange={handleInputChange}
              className={`w-full rounded-2xl border bg-white px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-brand-orange/30 ${
                errors.seminarDate
                  ? "border-red-500 focus:ring-red-500/30"
                  : "border-brand-dark/15"
              }`}
              aria-label="希望セミナー日程"
              aria-invalid={!!errors.seminarDate}
              aria-describedby={errors.seminarDate ? "seminarDate-error" : undefined}
            >
              <option value="">日程を選択してください</option>
              {scheduleOptions.map((slot) => (
                <option
                  key={`${slot.date}-${slot.time}`}
                  value={`${slot.date} ${slot.time}`}
                >
                  {slot.date} {slot.time}
                </option>
              ))}
            </select>
            {errors.seminarDate && (
              <p
                id="seminarDate-error"
                className="text-sm font-semibold text-red-600"
                role="alert"
              >
                {errors.seminarDate}
              </p>
            )}
          </label>
        )}

        <label className="space-y-2">
          <span className="text-sm font-semibold text-brand-dark">
            ご相談内容
          </span>
          <textarea
            rows={4}
            name="message"
            value={form.message}
            onChange={handleInputChange}
            className="w-full rounded-2xl border border-brand-dark/15 px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
            placeholder={
              form.contactType === "seminar"
                ? "開業予定時期、資金調達状況などをご記入ください。"
                : "開業予定時期、資金調達状況、ご相談内容などをご記入ください。"
            }
            aria-label="ご相談内容"
          />
        </label>

        {/* フォーム全体のエラーメッセージ */}
        {errors._form && (
          <div
            className="rounded-2xl border-2 border-red-500 bg-red-50 p-4"
            role="alert"
          >
            <p className="text-sm font-semibold text-red-600">{errors._form}</p>
          </div>
        )}

        <div className="flex flex-col gap-3 items-center">
          <CTAButton type="submit" isLoading={status === "submitting"}>
            {form.contactType === "seminar"
              ? "セミナーに申し込む"
              : "個別相談を申し込む"}
          </CTAButton>
          {status === "success" && (
            <div
              className="space-y-2 text-sm font-semibold text-emerald-600 animate-fade-in"
              role="alert"
            >
              <p>お申し込みありがとうございます。</p>
              <p>
                ご入力いただいたメールアドレスへ、当日のZoom URLを2営業日以内にお送りします。
              </p>
              <p className="text-xs text-emerald-500">
                ※届かない場合は迷惑メールフォルダもご確認ください。
              </p>
            </div>
          )}
          {status === "error" && !errors._form && (
            <p className="text-sm font-semibold text-red-600" role="alert">
              送信に失敗しました。もう一度お試しください。
            </p>
          )}
        </div>
      </form>
    </Section>
  );
};

export default ContactForm;


