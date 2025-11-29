import { useStaggeredAnimation } from "./useStaggeredAnimation";
import { ANIMATION_DELAYS } from "../constants/animations";

/**
 * Heroセクション用のアニメーション遅延を一括管理するカスタムフック
 * DRY原則：複数のuseStaggeredAnimation呼び出しを統合し、可読性を向上
 * パフォーマンス最適化：useStaggeredAnimationは既にuseMemoで最適化されているため、ここでのuseMemoは不要
 */
export const useHeroAnimationDelays = () => {
  return {
    targetText: useStaggeredAnimation(ANIMATION_DELAYS.HERO_TARGET, 0, 0),
    title: useStaggeredAnimation(ANIMATION_DELAYS.HERO_TITLE, 0, 0),
    offer: useStaggeredAnimation(ANIMATION_DELAYS.HERO_OFFER, 0, 0),
    cta: useStaggeredAnimation(ANIMATION_DELAYS.HERO_CTA, 0, 0),
  };
};

