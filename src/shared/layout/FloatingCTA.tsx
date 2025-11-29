import CTAButton from "../ui/CTAButton";

/**
 * フローティングCTAボタンコンポーネント
 * App.tsxから分離し、再利用可能なコンポーネントとして定義
 */
export const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 sm:hidden">
      <CTAButton
        href="#contact"
        size="large"
        className="shadow-[0_8px_32px_rgba(255,107,0,0.5)] animate-pulse"
      >
        無料相談
      </CTAButton>
    </div>
  );
};

