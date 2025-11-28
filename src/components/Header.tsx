import CTAButton from "./CTAButton";

const Header = () => (
  <header className="w-full px-6 py-4 bg-transparent">
    <div className="max-w-6xl mx-auto flex items-center justify-between">
      <div className="text-sm font-semibold text-brand-dark">
        一般社団法人 全国訪問看護経営研究協会
      </div>
      <CTAButton href="#contact" className="!px-6 !py-2.5 !text-sm">
        会員申し込み
      </CTAButton>
    </div>
  </header>
);

export default Header;

