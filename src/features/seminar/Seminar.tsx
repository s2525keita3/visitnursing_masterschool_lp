import Section from "../../shared/ui/Section";
import CTAButton from "../../shared/ui/CTAButton";
import { ImageWithFallback } from "../../shared/ui/ImageWithFallback";
import { useStaggeredAnimation } from "../../shared/hooks/useStaggeredAnimation";
import { ANIMATION_DELAYS } from "../../shared/constants/animations";

const Seminar = () => {
  const imageAnimationStyle = useStaggeredAnimation(ANIMATION_DELAYS.BASE * 2, 0, 0);

  return (
  <Section tone="surface">
    <div className="space-y-12">
      <div className="space-y-4 text-center animate-fade-up">
        <div className="inline-flex items-center justify-center rounded-full bg-brand-orange/10 px-6 py-2 font-semibold text-brand-orange">
          縺ｾ縺壹・辟｡譁咏嶌隲・°繧・        </div>
        <h2 className="text-center font-sans text-4xl font-black leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
          <span className="block text-brand-dark">縺ゅ↑縺溘・迥ｶ豕√↓蜷医ｏ縺帙◆</span>
          <span className="mt-2 block text-brand-orange">
            辟｡譁吝句挨逶ｸ隲・          </span>
        </h2>
      </div>

      <div className="flex justify-center animate-fade-up">
        <div className="w-full max-w-2xl rounded-3xl border border-brand-dark/10 bg-white p-8 shadow-card">
          <div className="grid gap-8 md:grid-cols-[auto_1fr] items-center">
            <div className="flex justify-center" style={imageAnimationStyle}>
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-brand-orange/20 shadow-lg">
                <ImageWithFallback
                  src="/koushi-jon-photo.webp"
                  alt="隰帛ｸｫ 縺倥ｇ繧・縺ｮ蜀咏悄"
                  className="w-full h-full object-cover"
                  fallbackText="隰帛ｸｫ蜀咏悄"
                />
              </div>
            </div>
            <div className="text-center md:text-left space-y-4">
              <div>
                <p className="text-lg font-bold text-brand-dark">隰帛ｸｫ・壹§繧・ｓ</p>
                <p className="text-sm text-brand-muted">險ｪ蝠冗恚隴ｷ 襍ｷ讌ｭ蝪ｾ 荳ｻ螳ｰ・冗樟蠖ｹ邨悟霧閠・/p>
              </div>
              <div className="space-y-2 text-brand-dark">
                <p className="leading-relaxed">
                  縺泌ｸ梧悍縺ｮ譌･遞九〒<span className="font-bold text-brand-orange">60蛻・・辟｡譁吝句挨逶ｸ隲・/span>繧呈価繧翫∪縺吶・                </p>
                <p className="text-sm text-brand-muted">
                  窶ｻZoom繧剃ｽｿ逕ｨ・磯｡泌・縺嶺ｸ崎ｦ√・閠ｳ縺縺大盾蜉OK・・                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center space-y-4 animate-fade-up">
        <p className="text-brand-muted text-sm">
          縲後∪縺壹・諠・ｱ蜿朱寔縺縺代阪〒繧よｭ楢ｿ弱〒縺吶ょｼｷ蠑輔↑蝟ｶ讌ｭ縺ｯ荳蛻・≠繧翫∪縺帙ｓ縲・        </p>
        <div className="flex justify-center">
          <CTAButton href="#contact" size="large" className="w-full max-w-md animate-shake-slow">
            辟｡譁咏嶌隲・↓逕ｳ縺苓ｾｼ繧
          </CTAButton>
        </div>
      </div>
    </div>
  </Section>
  );
};

export default Seminar;
