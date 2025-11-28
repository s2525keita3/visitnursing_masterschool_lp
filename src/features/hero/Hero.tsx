import Section from "../../shared/ui/Section";

const Hero = () => {
  return (
    <Section tone="surface">
      <div 
        className="relative min-h-screen flex items-center justify-center py-12 overflow-hidden"
        style={{
          backgroundImage: 'url("/Gemini_Generated_Image_d3aqqed3aqqed3aq.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* 背景画像の上にオーバーレイ（必要に応じて調整） */}
        <div className="absolute inset-0 bg-white/0 pointer-events-none" />
      </div>
    </Section>
  );
};

export default Hero;
