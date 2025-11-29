export type Testimonial = {
  company: string;
  name: string;
  result: string;
  comment: string;
};

export const testimonials: Testimonial[] = [
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


