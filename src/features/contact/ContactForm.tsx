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
          throw new Error("騾∽ｿ｡縺ｫ螟ｱ謨励＠縺ｾ縺励◆");
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
          <span className="text-brand-dark">辟｡譁吝句挨逶ｸ隲・/span>
          <span className="text-brand-orange">縺ｮ縺顔筏縺苓ｾｼ縺ｿ</span>
        </h2>
        <p className="text-brand-muted">
          辟｡譁吝句挨逶ｸ隲・〒縲√≠縺ｪ縺溘・迥ｶ豕√↓蜷医ｏ縺帙※縲梧ｬ｡縺ｮ荳謇九阪ｒ謨ｴ逅・＠縺ｾ縺吶・        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid animate-fade-up gap-6 rounded-3xl border border-brand-dark/5 bg-white p-10 shadow-card hover-lift"
        style={formAnimationStyle}
        noValidate
      >
        <label className="space-y-2">
          <span className="text-sm font-semibold text-brand-dark">縺雁錐蜑・*</span>
          <input
            required
            name="name"
            value={form.name}
            onChange={handleInputChange}
            className={`w-full rounded-2xl border px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-brand-orange/30 ${errors.name ? "border-red-500 focus:ring-red-500/30" : "border-brand-dark/15"}`}
            placeholder="螻ｱ逕ｰ 螟ｪ驛・
            aria-label="縺雁錐蜑・
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && <p id="name-error" className="text-sm font-semibold text-red-600" role="alert">{errors.name}</p>}
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-brand-dark">繝｡繝ｼ繝ｫ繧｢繝峨Ξ繧ｹ *</span>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            className={`w-full rounded-2xl border px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-brand-orange/30 ${errors.email ? "border-red-500 focus:ring-red-500/30" : "border-brand-dark/15"}`}
            placeholder="example@email.com"
            aria-label="繝｡繝ｼ繝ｫ繧｢繝峨Ξ繧ｹ"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && <p id="email-error" className="text-sm font-semibold text-red-600" role="alert">{errors.email}</p>}
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-brand-dark">縺泌ｸ梧悍縺ｮ逶ｸ隲・律遞・*</span>
          <input
            required
            name="preferredSchedule"
            value={form.preferredSchedule}
            onChange={handleInputChange}
            className={`w-full rounded-2xl border px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-brand-orange/30 ${errors.preferredSchedule ? "border-red-500 focus:ring-red-500/30" : "border-brand-dark/15"}`}
            placeholder="萓具ｼ・譛・譌･ 10:00縲・2:00縲・譛・譌･ 14:00莉･髯・縺ｪ縺ｩ"
            aria-label="縺泌ｸ梧悍縺ｮ逶ｸ隲・律遞・
            aria-invalid={!!errors.preferredSchedule}
            aria-describedby={errors.preferredSchedule ? "preferredSchedule-error" : undefined}
          />
          <p className="text-xs text-brand-muted">窶ｻ隍・焚縺ｮ蛟呵｣懈律繧偵＃險伜・縺・◆縺縺代ｋ縺ｨ隱ｿ謨ｴ縺後せ繝繝ｼ繧ｺ縺ｧ縺・/p>
          {errors.preferredSchedule && <p id="preferredSchedule-error" className="text-sm font-semibold text-red-600" role="alert">{errors.preferredSchedule}</p>}
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-brand-dark">縺皮嶌隲・・螳ｹ</span>
          <textarea
            rows={4}
            name="message"
            value={form.message}
            onChange={handleInputChange}
            className="w-full rounded-2xl border border-brand-dark/15 px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
            placeholder="髢区･ｭ莠亥ｮ壽凾譛溘∬ｳ・≡隱ｿ驕皮憾豕√√＃逶ｸ隲・・螳ｹ縺ｪ縺ｩ繧偵＃險伜・縺上□縺輔＞縲・
            aria-label="縺皮嶌隲・・螳ｹ"
          />
        </label>
        {errors._form && (
          <div className="rounded-2xl border-2 border-red-500 bg-red-50 p-4" role="alert">
            <p className="text-sm font-semibold text-red-600">{errors._form}</p>
          </div>
        )}
        <div className="flex flex-col gap-3 items-center">
          <CTAButton type="submit" isLoading={status === "submitting"} disabled={status === "submitting"}>
            蛟句挨逶ｸ隲・ｒ逕ｳ縺苓ｾｼ繧
          </CTAButton>
          {status === "success" && (
            <div className="space-y-2 text-sm font-semibold text-emerald-600 animate-fade-in" role="alert">
              <p>縺顔筏縺苓ｾｼ縺ｿ縺ゅｊ縺後→縺・＃縺悶＞縺ｾ縺吶・/p>
              <p>縺泌・蜉帙＞縺溘□縺・◆繝｡繝ｼ繝ｫ繧｢繝峨Ξ繧ｹ縺ｸ縲∵律遞玖ｪｿ謨ｴ縺ｮ縺秘｣邨｡繧・蝟ｶ讌ｭ譌･莉･蜀・↓縺企√ｊ縺励∪縺吶・/p>
              <p className="text-xs text-emerald-500">窶ｻ螻翫°縺ｪ縺・ｴ蜷医・霑ｷ諠代Γ繝ｼ繝ｫ繝輔か繝ｫ繝繧ゅ＃遒ｺ隱阪￥縺縺輔＞縲・/p>
            </div>
          )}
          {status === "error" && !errors._form && (
            <p className="text-sm font-semibold text-red-600" role="alert">騾∽ｿ｡縺ｫ螟ｱ謨励＠縺ｾ縺励◆縲ゅｂ縺・ｸ蠎ｦ縺願ｩｦ縺励￥縺縺輔＞縲・/p>
          )}
        </div>
      </form>
    </Section>
  );
};

export default ContactForm;
